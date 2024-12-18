import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markImportant } from "../service/Todo";

export const useToggleimportant = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ taskId, updatedTask }) =>
      markImportant({ taskId, updatedTask }), // Call the Supabase function
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]); // Invalidate the todos query
    },
    onError: (error) => {
      console.error("Error important todo:", error.message);
    },
  });
};
