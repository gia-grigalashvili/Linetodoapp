import React, { useState } from "react";
import Burger from "/public/imgs/Vector.png";
import Search from "/public/imgs/Vector - Copy.png";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-white shadow-md relative z-20 lg:ml-[25%]">
        <img
          src={Burger}
          alt="Burger Menu"
          onClick={toggleSidebar}
          className="lg:hidden cursor-pointer"
        />

        <div className="relative">
          <input
            type="text"
            className="w-[400px] bg-[#E7E8EA] p-[10px] rounded-[10px] pl-[30px]"
            placeholder="Search"
          />
          <svg
            className="absolute left-[10px] top-[50%] transform -translate-y-[50%]"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <circle cx="8" cy="8" r="7" stroke="#82868F" strokeWidth="2" />
            <line
              x1="12"
              y1="12"
              x2="16"
              y2="16"
              stroke="#82868F"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="flex gap-4 items-center justify-end">
          <img src={Search} alt="Search Icon" />
          <div className="h-[1rem] bg-[#82868F] w-[0.0625rem]"></div>
          <div className="cl-rootBox cl-userButton-root 🔒️ cl-internal-nfscg9">
            <img src="" alt="User Icon" />
          </div>
        </div>
      </div>

      {/* Sidebar - Always visible on lg screens and controlled on smaller screens */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block fixed left-0 lg:top-0 h-full lg:w-[25%] w-[35%] bg-white shadow-md transition-transform duration-300`}
      >
        <div className="p-4">
          <ul className="flex flex-col gap-[10px]">
            <li className="flex gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              ></svg>
              <h1>My Day</h1>
            </li>
            <li className="flex gap-[10px]">
              <h1>Important</h1>
            </li>
            <li className="flex gap-[10px]">
              <h1>Complete</h1>
            </li>
            <li className="flex gap-[10px]">
              <h1>Results</h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
