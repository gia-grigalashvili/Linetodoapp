// hooks/useInsertTodos.js
import { useMutation } from "@tanstack/react-query";
import { addTodo } from "../service/Todo";
import { useQueryClient } from "@tanstack/react-query";

export const useInsertTodos = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      console.log("Todo added successfully!");
    },
    onError: (error) => {
      console.error("Error inserting todo:", error.message);
    },
  });
};
