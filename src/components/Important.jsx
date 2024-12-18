// import React from "react";
// import { useGetImportantTodoss } from "../hooks/getImportantTodos";
// import { useUser } from "@clerk/clerk-react";
// import Todos from "./Todos";

// export default function Important() {
//   const user = useUser();
//   const { data, error, isLoading, isError } = useGetImportantTodoss(
//     user.user.id
//   );

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (isError) {
//     return <p>{error.message}</p>;
//   }

//   // Filter todos where isImportant is true
//   const importantTodos = data.filter((todo) => todo.isImportant);

//   return (
//     <div className="ml-[500px] text-black-400 p-[20px]  flex justify-center items-center flex-col">
//       <h2 className="text-[30px] font-sans-[20px]">Important Todo</h2>
//       <Todos data={importantTodos} />
//     </div>
//   );
// }

import React from "react";
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useGetImportantTodoss } from "../hooks/getImportantTodos";
import dateicon from "/public/imgs/dateicon.png";
import three from "/public/imgs/Frame 20063.png";
import Methods from "./Methodss";
export default function Important() {
  const user = useUser();
  const { data, error, isLoading, isError } = useGetImportantTodoss(
    user.user.id
  );
  const [editMenu, setEditMenu] = useState(null);

  const editMenuHandler = (todoId) => {
    setEditMenu(editMenu === todoId ? null : todoId);
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="ml-[500px] text-black-400 grid xl:grid-cols-3 lg:grid-cols-2 gap-6 mb-12 mt-8">
      <h2 className="text-[30px] font-sans-[20px]">Important Todo</h2>
      {data.map((todo, index) => {
        return (
          <li
            key={todo.id}
            className="text-black w-[300px]  bg-yellow-400 md:w-[300px] p-5 rounded-lg"
          >
            <div>
              <div className="bg-[#FDF8F2] max-w-[8rem] h-[30px] px-3 rounded-full flex items-center gap-2 mb-4">
                <img src={dateicon} alt="Date Icon" />
                {/* <p className="text-sm font-normal">({formattedDate})</p> */}
              </div>
              <p className="text-wrap text-gray-800 text-sm md:text-base lg:text-lg font-medium break-words">
                {todo.description}
              </p>
              <div className="flex justify-end mt-5 relative">
                <button
                  onClick={() => editMenuHandler(todo.id)}
                  aria-expanded={editMenu === todo.id}
                  className="cursor-pointer"
                >
                  <img src={three} alt="Menu Icon" />
                </button>
                {editMenu === todo.id && (
                  <Methods todoarr={todo} todo={todo.id} />
                )}
              </div>
              <link></link>
            </div>
          </li>
        );
      })}
    </div>
  );
}
