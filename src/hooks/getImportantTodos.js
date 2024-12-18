import { useQuery } from "@tanstack/react-query";
import { getImportantTodos } from "../service/Todo";

export const useGetImportantTodoss = (user_id) => {
  return useQuery({
    queryFn: () => getImportantTodos(user_id),
    queryKey: ["isImportant", user_id],
    enabled: !!user_id,
  });
};
