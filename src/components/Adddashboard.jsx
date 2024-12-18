import { useState } from "react";
import { useGetTodos } from "../hooks/useGetTodos";
import useInsertTodos from "../hooks/iinsertTodos";
import { useUser } from "@clerk/clerk-react";
import plus from "/public/imgs/Vectors.png";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import Todos from "./Todos";

export default function Adddashboard() {
  const formattedDate = format(new Date(), "dd/MM/yy");
  const { user } = useUser();
  const { data, error, isLoading, isError } = useGetTodos(user.id);
  const { mutateAsync: addTodo } = useInsertTodos();
  const [description, setDescription] = useState("");

  //damateba todos
  const handleAddTodo = async () => {
    if (description.trim() !== "") {
      await addTodo({ description, user_id: user.id, date: formattedDate });
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
    <div className="p-[20px]  flex justify-center items-center flex-col">
      <div className="flex mt-[40px] items-center w-[300px] lg:w-[400px] justify-center">
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
      <h1 className="uppercase text-[#646464] font-bold text-[1.8rem] lg:text-[2.5rem]">
        ALL Tasks
      </h1>
      <div className="flex p-[20px] uppercase mt-[20px] text-[25px] font-bold gap-[100px]">
        <h1 className=" text-yellow-400">Important</h1>
        <h1 className="text-green-600">Complete</h1>
        <h1 className="text-purple-600">Complete & Important</h1>
      </div>
      <Todos formattedDate={formattedDate} data={data} user={user} />

      {/* <Link to="/important">
        <Important></Important>
      </Link> */}
    </div>
  );
}
