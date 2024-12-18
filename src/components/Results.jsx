import React from "react";
// Import the useTodoContext hook
import { TodoProvider, useTodoContext } from "../context/Context";
export default function Results() {
  return (
    <TodoProvider>
      <TodoDashboard />
    </TodoProvider>
  );
}
function TodoDashboard() {
  const { data } = useTodoContext(); // Access data from the context

  // Calculate task counts
  const allTasksCount = data?.length || 0;
  const importantCount = data?.filter((todo) => todo.isImportant).length || 0;
  const inProgressCount =
    data?.filter((todo) => todo.status === "in-progress").length || 0;
  const doneCount =
    data?.filter((todo) => todo.isImportant && todo.isComplated).length || 0;

  return (
    <div>
      <div>
        <div className="mt-8 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 lg:ml-[25%]">
          {/* All Tasks */}
          <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
            <div className="flex justify-start w-full py-3">
              <h2 className="text-[#252931] text-[1rem] font-medium">
                All Tasks
              </h2>
            </div>
            <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
            <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">
              {allTasksCount}
            </p>
          </div>

          {/* Important Tasks */}
          <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
            <div className="flex justify-start w-full py-3">
              <h2 className="text-[#252931] text-[1rem] font-medium">
                Important
              </h2>
            </div>
            <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
            <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">
              {importantCount}
            </p>
          </div>

          {/* In Progress Tasks */}
          <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
            <div className="flex justify-start w-full py-3">
              <h2 className="text-[#252931] text-[1rem] font-medium">
                In Progress
              </h2>
            </div>
            <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
            <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">
              {inProgressCount}
            </p>
          </div>

          {/* Done Tasks */}
          <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
            <div className="flex justify-start w-full py-3">
              <h2 className="text-[#252931] text-[1rem] font-medium">Done</h2>
            </div>
            <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
            <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">
              {doneCount}
            </p>
          </div>
        </div>

        {/* Graph and Detailed Info */}
        <div className="mt-8 flex justify-center gap-4 px-4 flex-wrap mb-10 lg:ml-[25%]">
          <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md w-full">
            <div className="flex justify-start w-full py-3">
              <h2 className="text-[#252931] text-[1rem] font-medium">
                All Tasks - Detailed View
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
