import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../service/Todo";

export const useGetTodos = (user_id) => {
  return useQuery({
    queryFn: () => getTodos(user_id),
    queryKey: ["todo", user_id],
  });
};
