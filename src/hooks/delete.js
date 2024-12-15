import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../service/Todo";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId }) => deleteTodo(taskId),
    mutationKey: ["deleteTodo"], // Keep mutationKey descriptive
    onSuccess: () => {
      // Invalidate the "todo" query to refetch the todo list
      queryClient.invalidateQueries(["todo"]);
    },
    onError: (error) => {
      console.error("Error deleting todo:", error.message);
    },
  });
};
