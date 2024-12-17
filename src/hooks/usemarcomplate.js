import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markcomplate } from "../service/Todo";

export const useMarcomplate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId, updatedTask }) =>
      markcomplate({ taskId, updatedTask }),
    onSuccess: () => {
      queryClient.invalidateQueries(["todo"]);
      console.log("Task marked as completed successfully!");
    },
    onError: (error) => {
      console.error("Error marking todo as completed:", error.message);
    },
  });
};
