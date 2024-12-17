import { useState } from "react";
import dateicon from "/public/imgs/dateicon.png";
import { colors } from "../colors/colors";
import three from "/public/imgs/Frame 20063.png";
import Methodss from "./Methodss";
import Results from "./Results";
import { Link } from "react-router-dom";
export default function Todos({ formattedDate, data }) {
  const [editMenu, setEditMenu] = useState(null);

  const editMenuHandler = (todoId) => {
    setEditMenu(editMenu === todoId ? null : todoId);
  };

  const getRandomColor = (id) => {
    return colors[id % colors.length];
  };

  return (
    <div>
      <ul className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6 mb-12 mt-8">
        {data.map((todo, index) => {
          // Set background color based on conditions
          let backgroundColor = "";
          if (todo.isImportant && todo.isCompleted) {
            backgroundColor = "black";
          } else if (todo.isComplated) {
            backgroundColor = "green";
          } else if (todo.isImportant) {
            backgroundColor = "yellow";
          }

          return (
            <li
              key={todo.id}
              className="text-black w-[300px] md:w-[300px] p-5 rounded-lg"
              style={{ backgroundColor }}
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
                    <Methodss todoarr={todo} todo={todo.id} />
                  )}
                </div>
                <link></link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
