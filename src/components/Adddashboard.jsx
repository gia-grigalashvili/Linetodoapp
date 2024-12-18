import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { format } from "date-fns";
import { TodoProvider, useTodoContext } from "../context/Context"; // Import the TodoProvider and useTodoContext hook
import plus from "/public/imgs/Vectors.png";
import Todos from "./Todos";
import Results from "./Results";

// The Adddashboard component that will be wrapped by TodoProvider
export default function Adddashboard() {
  return (
    <TodoProvider>
      <TodoDashboard />
    </TodoProvider>
  );
}

// The component where context will be used
function TodoDashboard() {
  const { user } = useUser();
  const {
    formattedDate,
    data,
    error,
    isLoading,
    isError,
    description,
    setDescription,
    handleAddTodo,
  } = useTodoContext();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }
  console.log(data);
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
      {/* <Results className="block" data={data}></Results> */}
      {/* <Results
        allTasks={data}
        importantTasks={importantTasks}
        inProgressTasks={inProgressTasks}
        doneTasks={doneTasks}
      /> */}
    </div>
  );
}
