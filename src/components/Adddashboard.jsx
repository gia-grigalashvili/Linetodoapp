import React, { useState } from "react";
import { useGetTodos } from "../hooks/useGetTodos";
import useInsertTodos from "../hooks/iinsertTodos";
import { useUser } from "@clerk/clerk-react";
import plus from "/public/imgs/Vectors.png";
import { format } from "date-fns"; // Make sure you import format from date-fns
import dateicon from "/public/imgs/dateicon.png";
import { colors } from "../colors/colors";
import three from "/public/imgs/Frame 20063.png";
import Methodss from "./Methodss";
export default function Adddashboard() {
  const formattedDate = format(new Date(), "dd/MM/yy");
  const { user } = useUser();
  const { data, error, isLoading, isError } = useGetTodos(user.id);
  const { mutateAsync: addTodo } = useInsertTodos();
  const [description, setDescription] = useState("");
  const [showmethods, setshowmethods] = useState(false);
  //feris cvlileba
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  const showmeth = () => {
    setshowmethods(!showmethods);
  };
  console.log(showmeth);
  //amatebs todos
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
    <div>
      <div className="flex mt-[40px] items-center justify-center">
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
      <ul className="px-4 grid lg:grid-cols-3 lg:gap-6 mb-[3rem] grid-cols-2 gap-6 md:grid-cols-2 md:gap-6">
        {data?.map((todo, index) => (
          <li
            key={index}
            className="relative rounded-lg w-auto shadow-md h-auto p-4 border border-gray-200 flex flex-col"
            style={{ backgroundColor: getRandomColor() }}
          >
            <div>
              <div className="bg-[#FDF8F2] max-w-[8rem] h-[30px] px-[10px] rounded-full flex justify-start gap-2 items-center mb-4">
                <img src={dateicon} alt="Date Icon" />
                <p className="text-[14px] font-normal text-textColor leading-6">
                  {formattedDate}
                </p>
              </div>
              <p>{todo.description}</p>
              <div className="flex justify-end mt-[1.62rem]">
                <img onClick={showmeth} src={three} alt="" />
                {showmethods && <Methodss />}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
