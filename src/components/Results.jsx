import React from "react";
// import { useGetTodos } from "../hooks/useGetTodos";
export default function Results({ todoarr }) {
  // const { data, error, isLoading, isError } = useGetTodos(user.id);
  // Calculate counts
  // eslint-disable-next-line react/prop-types
  // const allTasksCount = todos.length;
  // // eslint-disable-next-line react/prop-types
  // const importantCount = todos.filter((todo) => todo.important).length;
  // // eslint-disable-next-line react/prop-types
  // const inProgressCount = todos.filter(
  //   (todo) => todo.status === "inProgress"
  // ).length; // Assuming 'status' field exists
  // // eslint-disable-next-line react/prop-types
  // const doneCount = todos.filter((todo) => todo.status === "done").length; // Assuming 'status' field exists
  console.log(todoarr);
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
              {/* {allTasksCount} */}
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
              {/* {importantCount} */}
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
              {/* {inProgressCount} */}
            </p>
          </div>

          {/* Done Tasks */}
          <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
            <div className="flex justify-start w-full py-3">
              <h2 className="text-[#252931] text-[1rem] font-medium">Done</h2>
            </div>
            <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
            <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">
              {/* {doneCount} */}
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
              {/* <div className="ml-5">
                <ul className="mt-2 flex flex-col gap-6">
                  <li>
                    <span style={{ color: "rgb(128, 188, 0)" }}>●</span>{" "}
                    Completed: {doneCount} (
                    {((doneCount / allTasksCount) * 100).toFixed(1)}%)
                  </li>
                  <li>
                    <span style={{ color: "rgb(110, 124, 124)" }}>●</span> In
                    Progress: {inProgressCount} (
                    {((inProgressCount / allTasksCount) * 100).toFixed(1)}%)
                  </li>
                  <li>
                    <span style={{ color: "rgb(255, 164, 0)" }}>●</span>{" "}
                    Important: {importantCount} (
                    {((importantCount / allTasksCount) * 100).toFixed(1)}%)
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// import React from "react";

// import Todos from "./Todos";
// export default function Results() {
//   // თუ მონაცემები არსებობს
//   const allTasksCount = data ? data.length : 0;
//   const importantCount = data
//     ? data.filter((todo) => todo.important).length
//     : 0;
//   const completedCount = data
//     ? data.filter((todo) => todo.completed).length
//     : 0;
//   console.log(data);
//   return (
//     <div>
//       <div className="mt-8 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 lg:ml-[25%]">
//         {/* All Tasks */}
//         <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
//           <div className="flex justify-start w-full py-3">
//             <h2 className="text-[#252931] text-[1rem] font-medium">
//               All Tasks
//             </h2>
//           </div>
//           <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
//           <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">
//             {allTasksCount}
//           </p>
//         </div>

//         {/* Important Tasks */}
//         <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
//           <div className="flex justify-start w-full py-3">
//             <h2 className="text-[#252931] text-[1rem] font-medium">
//               Important
//             </h2>
//           </div>
//           <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
//           <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">
//             {importantCount}
//           </p>
//         </div>

//         {/* Completed Tasks */}
//         <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
//           <div className="flex justify-start w-full py-3">
//             <h2 className="text-[#252931] text-[1rem] font-medium">
//               Completed
//             </h2>
//           </div>
//           <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
//           <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">
//             {completedCount}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
