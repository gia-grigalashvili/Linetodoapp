import React, { useState } from "react";
import { useGetTodos } from "../hooks/useGetTodos";
import { useInsertTodos } from "../hooks/iinsertTodos";

export default function Adddashboard() {
  const { data, error, isLoading, isError } = useGetTodos();
  const { mutate: addTodo } = useInsertTodos();

  const [description, setDescription] = useState("");
  const handleAddTodo = () => {
    if (description) {
      addTodo({ description, user_id: 1 });
      setDescription("");
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
      <h1>Dashboard</h1>

      {/* Display Todos */}
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            {todo.description} - {todo.isComplated ? "Completed" : "Pending"}
          </li>
        ))}
      </ul>

      {/* Add Todo */}
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
}
