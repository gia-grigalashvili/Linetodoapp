import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../service/Todo";
import { useUser } from "@clerk/clerk-react";
export const useGetTodos = () => {
  const { user } = useUser();
  const userId = user.id;
  return useQuery({
    queryFn: () => getTodos(userId),
    queryKey: ["todo", userId],
  });
};
