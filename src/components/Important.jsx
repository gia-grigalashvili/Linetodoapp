import React from "react";
import { useGetImportantTodoss } from "../hooks/getImportantTodos";
import { useUser } from "@clerk/clerk-react";
export default function Important() {
  const user = useUser();
  const { data, error, isLoading, isError } = useGetImportantTodoss(
    user.user.id
  );
  console.log(user.user.id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }
  console.log(data);
  return (
    <div className=" ml-[500px] text-black-400">
      {" "}
      <h2>Important Todo:</h2>
      {data.map((todo) => {
        return (
          <li
            key={todo.id}
            className="text-black w-[300px] md:w-[300px] p-5 rounded-lg"
          >
            <div>
              <div className="bg-[#FDF8F2] max-w-[8rem] h-[30px] px-3 rounded-full flex items-center gap-2 mb-4"></div>
              <p className="text-wrap text-gray-800 text-sm md:text-base lg:text-lg font-medium break-words">
                {todo.description}
              </p>
              <div className="flex justify-end mt-5 relative"></div>
            </div>
          </li>
        );
      })}
    </div>
  );
}
