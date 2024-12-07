import { useState } from "react";
import Burger from "/public/imgs/Vector.png";
import Search from "/public/imgs/Vector - Copy.png";
import arrow from "/public/imgs/material-symbols-light_navigate-next.png";
import sun from "/public/imgs/ph_sun-light.png";
import star from "/public/imgs/ph_star-thin.png";
import evaluation from "/public/imgs/evaluation-Bf1J4d5n.png";
import complete from "/public/imgs/complete-BS8KPSVz.png";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { id: 1, name: "My Day", icon: sun, route: "/" },
    { id: 2, name: "Important", icon: star, route: "/important" },
    { id: 3, name: "Complete", icon: evaluation, route: "/complete" },
    { id: 4, name: "Results", icon: complete, route: "/results" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-white shadow-md relative z-20 lg:ml-[25%]">
        <img
          src={Burger}
          alt="Burger Menu"
          onClick={toggleSidebar}
          className="lg:hidden cursor-pointer"
        />

        <div className="hidden lg:block relative">
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
          <div className="flex gap-[5px]">
            <h1 className="hidden lg:block">EN</h1>
            <img className="hidden lg:block" src={arrow} alt="" />
          </div>

          <img className="lg:hidden" src={Search} alt="Search Icon" />
          <div className="lg:hidden h-[1rem] bg-[#82868F] w-[0.0625rem]"></div>

          <UserButton afterSignOutUrl="/signin" />
        </div>
      </div>

      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block fixed left-0 lg:top-0 h-full lg:w-[25%] bg-white shadow-md transition-transform duration-300`}
      >
        <div className="p-4 lg:mt-[100px]">
          <ul className="flex  flex-col gap-[10px]">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="flex w-[90%] items-center p-[10px] rounded-md hover:bg-[#C7CAD0]  gap-[10px]"
              >
                <img
                  className={item.id > 2 ? "w-[20px] h-[20px]" : ""}
                  src={item.icon}
                  alt={item.name}
                />
                <Link to={item.route} className="no-underline text-black">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
