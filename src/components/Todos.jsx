import { useState } from "react";
import dateicon from "/public/imgs/dateicon.png";
import { colors } from "../colors/colors";
import three from "/public/imgs/Frame 20063.png";
import Methodss from "./Methodss";

export default function Todos({ formattedDate, data }) {
  const [editMenu, setEditMenu] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6; // ყოველ გვერდზე 6 Todo გამოჩნდება

  const editMenuHandler = (todoId) => {
    setEditMenu(editMenu === todoId ? null : todoId);
  };

  const getBackgroundColor = (todo) => {
    return (
      (todo.isImportant && todo.isComplated && "#890fec") ||
      (todo.isComplated && "green") ||
      (todo.isImportant && "yellow") ||
      colors[todo.id % colors.length]
    );
  };

  const handleNext = () => {
    const maxPage = Math.ceil(data.length / itemsPerPage) - 1;
    setCurrentPage((prevPage) =>
      prevPage < maxPage ? prevPage + 1 : prevPage
    );
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  const startIndex = currentPage * itemsPerPage;
  const currentTodos = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <ul className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6 mb-12 mt-8">
        {currentTodos.map((todo) => {
          const backgroundColor = getBackgroundColor(todo);

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
              </div>
            </li>
          );
        })}
      </ul>

      {/* Next და Previous ღილაკები */}
      <div className="flex justify-between mt-4">
        {currentPage > 0 && (
          <button
            onClick={handlePrev}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Previous
          </button>
        )}
        {startIndex + itemsPerPage < data.length && (
          <button
            onClick={handleNext}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
