import { useState } from "react";
import Burger from "/public/imgs/Vector.png";
import Search from "/public/imgs/Vector - Copy.png";
import moon from "/public/imgs/moons.png";
import sun from "/public/imgs/ph_sun-light.png";
import star from "/public/imgs/ph_star-thin.png";
import evaluation from "/public/imgs/evaluation-Bf1J4d5n.png";
import complete from "/public/imgs/complete-BS8KPSVz.png";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { useTodoContext } from "../context/Todocontext";
import { useTheme } from "../context/ThemeContext";
import LanguageChanger from "./LanguageChanger";
import { useTranslation } from "react-i18next";
export default function Header() {
  // eslint-disable-next-line no-unused-vars
  const { theme, toggleTheme } = useTheme();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { todos, toggleSearch, handleSearchChange } = useTodoContext();
  const { t } = useTranslation();
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleSearchInput = () => {
    setSearchOpen(!isSearchOpen);
  };

  const menuItems = [
    { id: 1, name: "My Day", icon: sun, route: "/" },
    { id: 2, name: "Important", icon: star, route: "/important" },
    { id: 3, name: "Complete", icon: evaluation, route: "/complete" },
    { id: 4, name: "Results", icon: complete, route: "/results" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center p-4 dark:bg-[#161616]   border-[1px] dark:border-[#E7E8EA] bg-white shadow-md relative z-20 lg:ml-[25%]">
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
            placeholder={t("Search")}
            onChange={handleSearchChange}
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
            <h1 className="">
              {" "}
              <LanguageChanger />
            </h1>
            {/* <img className="hidden lg:block" src={arrow} alt="" /> */}
          </div>

          <img
            className="lg:hidden cursor-pointer"
            src={Search}
            alt="Search Icon"
            onClick={toggleSearchInput}
          />
          <div className="lg:hidden h-[1rem] bg-[#ffffff] w-[0.0625rem]"></div>
          <img
            onClick={toggleTheme}
            className="block dark:hidden cursor-pointer "
            src={sun}
            alt=""
          />
          <img
            onClick={toggleTheme}
            className="hidden cursor-pointer dark:block w-[20px] h-[20px]"
            src={moon}
            alt=""
          />
          <UserButton afterSignOutUrl="/signin" />
        </div>
      </div>

      {isSearchOpen && (
        <div className="p-4 bg-[#d6d6d6]">
          <input
            type="text"
            className="w-full p-[10px] lg:block rounded-[10px] pl-[30px]"
            placeholder={t("Search")}
            onChange={handleSearchChange}
          />
        </div>
      )}

      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        }  lg:block fixed left-0 top-0  h-full dark:bg-[#161616]  border-[1px] dark:border-[#E7E8EA] lg:w-[25%]  bg-white shadow-md z-30 transition-transform duration-300`}
      >
        <div className="p-4  lg:mt-[100px]">
          <h1
            onClick={toggleSidebar}
            className="lg:hidden p-[10px] dark:text-white text-[30px]"
          >
            x
          </h1>
          <ul className="flex  mt-[100px]  flex-col gap-[10px]">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="flex w-[90%] items-center p-[10px] rounded-md  hover:bg-[#C7CAD0] gap-[10px]"
              >
                <img
                  className={item.id > 2 ? "w-[20px] h-[20px]" : ""}
                  src={item.icon}
                  alt={item.name}
                />
                <Link
                  to={item.route}
                  className="no-underline lg:text-[20px] dark:text-white text-black"
                >
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
