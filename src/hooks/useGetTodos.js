import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../service/Todo";

export const useGetTodos = () => {
  return useQuery({
    queryFn: getTodos,
    queryKey: ["todos"],
  });
};
