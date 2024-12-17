import React from "react";
import { GetMarkComplate } from "../hooks/getMarkComplate";
import { useUser } from "@clerk/clerk-react";
import Todos from "./Todos";

export default function Completed() {
  const user = useUser();
  const { data, error, isLoading, isError } = GetMarkComplate(user.user.id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  const completedTodos = data.filter((todo) => todo.isComplated);

  return (
    <div className="ml-[500px] text-black-400">
      <h2>Completed Todos:</h2>
      <Todos data={completedTodos} isCompletedPage={true} />
    </div>
  );
}
