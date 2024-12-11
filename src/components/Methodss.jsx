import React from "react";
import sun from "/public/imgs/ph_sun-light.png";
import star from "/public/imgs/ph_star-thin.png";
import cirle from "/public/imgs/eva_radio-button-off-outline.png";
import deletes from "/public/imgs/deleteimg.png";

export default function Methods() {
  return (
    <div>
      <div
        data-aos="fade-right"
        className="bg-white absolute py-2 px-[0.88rem] rounded-lg -bottom-[150px] min-w-[11.75rem] z-10 right-2 shadow-md aos-init aos-animate"
      >
        <ul className="flex flex-col gap-1">
          <li className="flex justify-start py-[0.62rem] hover:bg-gray-100 border-b-[1px] rounded-md gap-3 w-full pl-2 cursor-pointer">
            <div>
              <img src={star} alt="" />
            </div>
            <span className="text-black">Important</span>
          </li>
          <li className="flex justify-start py-[0.62rem] gap-3 w-full hover:bg-gray-100 pl-2 rounded-md cursor-pointer border-b-[1px]">
            <div>
              <img src={cirle} alt="" />
            </div>
            <span className="text-black">Completed</span>
          </li>
          <li className="flex justify-start py-[0.62rem] gap-3 w-full hover:bg-[#C7CAD0] pl-2 cursor-pointer">
            <div>
              <img src={deletes} alt="" />
            </div>
            <span className="text-black">Delete</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
