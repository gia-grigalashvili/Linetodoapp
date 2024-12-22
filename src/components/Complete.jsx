// import React from "react";
// import { GetMarkComplate } from "../hooks/getMarkComplate";
// import { useUser } from "@clerk/clerk-react";
// import Todos from "./Todos";

// export default function Completed() {
//   const user = useUser();
//   const { data, error, isLoading, isError } = GetMarkComplate(user.user.id);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (isError) {
//     return <p>{error.message}</p>;
//   }

//   const completedTodos = data.filter((todo) => todo.isComplated);

//   return (
//     <div className="ml-[500px] text-black-400">
//       <h2>Completed Todos:</h2>
//       <Todos data={completedTodos} isCompletedPage={true} />
//     </div>
//   );
// }
import { useTranslation } from "react-i18next";
import { GetMarkComplate } from "../hooks/getMarkComplate";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import Methods from "./Methodss";
import { format } from "date-fns";
import dateicon from "/public/imgs/dateicon.png";
import three from "/public/imgs/Frame 20063.png";
export default function Completed() {
  const user = useUser();
  const formattedDate = format(new Date(), "dd/MM/yy");
  const { data, error, isLoading, isError } = GetMarkComplate(user.user.id);
  const [editMenu, setEditMenu] = useState(null);
  const { t } = useTranslation();
  const editMenuHandler = (todoId) => {
    setEditMenu(editMenu === todoId ? null : todoId);
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }
  // h-[100vh] dark:bg-black
  return (
    <div className="lg:ml-[20%]  text-black-400 gp-[20px]  flex items-center flex-col">
      <h2 className="text-[30px]  mt-[100px] font-bold uppercase text-green-700 font-sans-[20px]">
        {t("Completed Todos")}
      </h2>
      <ul className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6 mb-12 mt-8">
        {data.map((todo) => {
          return (
            <li
              key={todo.id}
              className="text-black w-[300px]  bg-green-800 md:w-[300px] p-5 rounded-lg"
            >
              <div>
                <div className="bg-[#FDF8F2] max-w-[8rem] h-[30px] px-3 rounded-full flex items-center gap-2 mb-4">
                  <img src={dateicon} alt="Date Icon" />
                  <p className="text-sm font-normal">({formattedDate})</p>
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
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
