import React from "react";

export default function Results() {
  return (
    <div>
      <div>
        <div className="mt-8 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 lg:ml-[25%]">
          <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
            <div className="flex justify-start w-full py-3">
              <h2 className="text-[#252931] text-[1rem] font-medium">
                All Tasks
              </h2>
            </div>
            <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
            <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">
              {/* {taskCounts.all} */}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
            <div className="flex justify-start w-full py-3">
              <h2 className="text-[#252931] text-[1rem] font-medium">
                Important
              </h2>
            </div>
            <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
            <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">
              {/* {taskCounts.important} */}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
            <div className="flex justify-start w-full py-3">
              <h2 className="text-[#252931] text-[1rem] font-medium">
                In Progress
              </h2>
            </div>
            <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
            <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">
              {/* {taskCounts.inProgress} */}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
            <div className="flex justify-start w-full py-3">
              <h2 className="text-[#252931] text-[1rem] font-medium">Done</h2>
            </div>
            <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
            <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">
              {/* {taskCounts.done} */}
            </p>
          </div>
        </div>
        <div className=" mt-8 flex justify-center gap-4 px-4 flex-wrap mb-10 lg:ml-[25%]">
          <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md w-full">
            <div className="flex justify-start w-full py-3">
              <h2 className="text-[#252931] text-[1rem] font-medium">
                All Tasks
              </h2>
            </div>
            <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
            <div className="flex items-center mt-10 lg:gap-20 md:flex-row lg:flex-row mb-12 flex-col gap-12">
              <div className="flex-1">
                <canvas
                  role="img"
                  height="600"
                  width="600"
                  style={{
                    display: "block",
                    boxSizing: "border-box",
                    height: "300px",
                    width: "300px",
                  }}
                ></canvas>
              </div>
              <div className="ml-5">
                <ul className="mt-2 flex flex-col gap-6">
                  <li>
                    <span style={{ color: "rgb(128, 188, 0)" }}>●</span>{" "}
                    Completed: 0 (0.0%)
                  </li>
                  <li>
                    <span style={{ color: "rgb(110, 124, 124)" }}>●</span> In
                    {/* Progress: {taskCounts.inProgress} (100.0%) */}
                  </li>
                  <li>
                    <span style={{ color: "rgb(255, 164, 0)" }}>●</span>{" "}
                    {/* Important: {taskCounts.important} (0.0%) */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
