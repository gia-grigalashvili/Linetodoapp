import { useUser } from "@clerk/clerk-react";
import { useGetTodos } from "../hooks/useGetTodos";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useTranslation } from "react-i18next";
// Register the necessary components of Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Results() {
  const user = useUser();
  const { data, isLoading, isError, error } = useGetTodos(user.user.id);
  const { t } = useTranslation();
  // Calculate task counts
  const allTasksCount = data?.length || 0;
  const importantCount = data?.filter((todo) => todo.isImportant).length || 0;
  const isComplated = data?.filter((todo) => todo.isComplated).length || 0;
  const doneCount =
    data?.filter((todo) => todo.isImportant && todo.isComplated).length || 0;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  // Prepare the data for the Doughnut chart
  const chartData = {
    labels: ["All Tasks", "Important", "In Progress", "Done"],
    datasets: [
      {
        data: [allTasksCount, importantCount, isComplated, doneCount],
        backgroundColor: ["#ff9f00", "#ff6363", "#4caf50", "#8e44ad"],
        hoverBackgroundColor: ["#ff9f00", "#ff6363", "#4caf50", "#8e44ad"],
      },
    ],
  };

  return (
    <div>
      <div>
        <div className="mt-8 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 lg:ml-[25%]">
          {/* All Tasks */}
          <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
            <div className="flex justify-start w-full py-3">
              <h2 className="text-[#252931] text-[1rem] font-medium">
                {t("All Tasks")}
              </h2>
            </div>
            <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
            <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">
              {allTasksCount}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
            <div className="flex justify-start w-full py-3">
              <h2 className="text-[#252931] text-[1rem] font-medium">
                {t("important")}
              </h2>
            </div>
            <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
            <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">
              {importantCount}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
            <div className="flex justify-start w-full py-3">
              <h2 className="text-[#252931] text-[1rem] font-medium">
                {t("Complete")}
              </h2>
            </div>
            <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
            <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">
              {isComplated}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem] shadow-md">
            <div className="flex justify-start w-full py-3">
              <h2 className="text-[#252931] text-[1rem] font-medium">
                {t("Done")}
              </h2>
            </div>
            <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
            <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">
              {doneCount}
            </p>
          </div>
        </div>

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
                <Doughnut data={chartData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
