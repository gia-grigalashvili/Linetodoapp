import React from "react";
import { useGetImportantTodoss } from "../hooks/getImportantTodos";
import { useUser } from "@clerk/clerk-react";
import Todos from "./Todos";

export default function Important() {
  const user = useUser();
  const { data, error, isLoading, isError } = useGetImportantTodoss(
    user.user.id
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  // Filter todos where isImportant is true
  const importantTodos = data.filter((todo) => todo.isImportant);

  return (
    <div className="ml-[500px] text-black-400 p-[20px]  flex justify-center items-center flex-col">
      <h2 className="text-[30px] font-sans-[20px]">Important Todo</h2>
      <Todos data={importantTodos} />
    </div>
  );
}
