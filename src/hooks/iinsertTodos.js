import { useMutation } from "@tanstack/react-query";
import { addTodo } from "../service/Todo";
import { useQueryClient } from "@tanstack/react-query";

const useInsertTodos = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todo"]);
      console.log("Todo added successfully!");
    },
  });
};

export default useInsertTodos;
