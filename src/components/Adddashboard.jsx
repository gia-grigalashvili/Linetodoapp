import { useState } from "react";
import { useGetTodos } from "../hooks/useGetTodos";
import useInsertTodos from "../hooks/iinsertTodos";
import { useUser } from "@clerk/clerk-react";
import plus from "/public/imgs/Vectors.png";
import { format } from "date-fns";
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
  const [showMethodsIndex, setShowMethodsIndex] = useState(null); //methodebis state

  // Helper function to generate random colors
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  //damateba todos
  const handleAddTodo = async () => {
    if (description.trim() !== "") {
      await addTodo({ description, user_id: user.id, date: formattedDate });
      setDescription("");
    }
  };

  // meethodis gamochena imave indexze romelsac vavwebi
  const toggleMethods = (index) => {
    if (showMethodsIndex === index) {
      setShowMethodsIndex(null);
    } else {
      setShowMethodsIndex(index);
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

      <ul className=" grid lg:grid lg:grid-cols-3 gap-6 lg:gap-6 mb-[3rem]  mt-[30px] md:grid md:grid-cols-2 md:gap-6">
        {data?.map((todo, index) => {
          const backgroundColor = getRandomColor(); // Set color for each todo item separately

          return (
            <li
              key={index}
              className="  text-black text-siz p-[20px] rounded-[10px]"
              style={{ backgroundColor }}
            >
              <div>
                <div className="bg-[#FDF8F2]  max-w-[8rem] h-[30px] px-[10px] rounded-full flex justify-start gap-2 items-center mb-4">
                  <img src={dateicon} alt="Date Icon" />
                  <p className="text-[14px] font-normal  leading-6">
                    ({formattedDate})
                  </p>
                </div>
                <p className="text-wrap block text-gray-800 text-sm md:text-base lg:text-lg font-medium whitespace-pre-wrap overflow-ellipsis">
                  {todo.description}
                </p>
                <div className="flex relative justify-end mt-[20%]">
                  <img
                    onClick={() => toggleMethods(index)}
                    src={three}
                    alt=""
                  />
                  {showMethodsIndex === index && <Methodss todo={todo.id} />}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
