import React, { useContext, useState, useEffect } from "react";
import { useGetTodos } from "../hooks/useGetTodos";
import { useInsertTodos } from "../hooks/iinsertTodos";
import plus from "/public/imgs/Vectors.png";
import { MyContext } from "../context/Context";

export default function Adddashboard() {
  const { userid } = useContext(MyContext);
  const { data, error, isLoading, isError } = useGetTodos(userid);
  const { mutate: addTodo } = useInsertTodos();
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = async () => {
    if (description && userid) {
      const currentDate = new Date().toLocaleDateString();
      const newTodo = {
        description,
        date: currentDate,
        userId: userid,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);

      setDescription("");

      await addTodo(newTodo);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <div className="flex mt-[40px] items-center justify-center">
        <button
          className="flex items-center relative w-full max-w-lg mb-[2.5rem] shadow-sm rounded-md p-2"
          style={{
            boxShadow: "0px 2px 4px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img onClick={handleAddTodo} src={plus} alt="Add" className="mr-2" />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add a task"
            className="outline-none border-none flex-1"
          />
        </button>
      </div>

      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border-b border-gray-300"
          >
            <div>
              <p>{todo.description}</p>
              <p className="text-sm text-gray-500">{todo.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
