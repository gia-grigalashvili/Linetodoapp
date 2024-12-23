import star from "/public/imgs/ph_star-thin.png";
import circle from "/public/imgs/eva_radio-button-off-outline.png";
import deletes from "/public/imgs/deleteimg.png";

import { useDeleteTodo } from "../hooks/delete";
import { useToggleimportant } from "../hooks/useToggleImportant.js";
import { useMarcomplate } from "../hooks/usemarcomplate.js";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
export default function Methods({ todo }) {
  const { mutate: deleteTodos } = useDeleteTodo();
  const { mutate: important } = useToggleimportant();
  const { mutate: Complated } = useMarcomplate();
  const { t } = useTranslation();
  const clickImportant = (todo) => {
    // eslint-disable-next-line react/prop-types
    important({ taskId: todo, updatedTask: !todo.important });
  };

  const clickComplated = (todo) => {
    // eslint-disable-next-line react/prop-types
    Complated({ taskId: todo, updatedTask: !todo.Complated });
  };

  const handleDelete = (todo) => {
    deleteTodos({ taskId: todo });
  };

  return (
    <div>
      <div
        data-aos="fade-right"
        className="bg-white absolute py-2 px-[0.88rem] rounded-lg -bottom-[150px] min-w-[11.75rem] z-10 right-2 shadow-md aos-init aos-animate"
      >
        <ul className="flex flex-col gap-1">
          {/* Important Action */}
          <li
            onClick={() => clickImportant(todo)}
            className="flex justify-start py-[0.62rem] hover:bg-gray-100 border-b-[1px] rounded-md gap-3 w-full pl-2 cursor-pointer"
          >
            <div>
              <img src={star} alt="Important Icon" />
            </div>
            <span className="text-black">{t("important")}</span>
          </li>

          {/* Completed Action */}
          <li
            className="flex justify-start py-[0.62rem] gap-3 w-full hover:bg-gray-100 pl-2 rounded-md cursor-pointer border-b-[1px]"
            onClick={() => clickComplated(todo)}
          >
            <div>
              <img src={circle} alt="Completed Icon" />
            </div>
            <span className="text-black">{t("Complete")}</span>
          </li>

          {/* Delete Action */}
          <li
            className="flex justify-start py-[0.62rem] gap-3 w-full hover:bg-[#C7CAD0] pl-2 cursor-pointer"
            onClick={() => handleDelete(todo)}
          >
            <div>
              <img src={deletes} alt="Delete Icon" />
            </div>
            <span className="text-black">{t("Delete")}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
