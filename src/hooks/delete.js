import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../service/Todo";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, taskId }) => deleteTodo(userId, taskId),

    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },

    onError: (error) => {
      console.error("Error deleting todo:", error.message);
    },
  });
};
