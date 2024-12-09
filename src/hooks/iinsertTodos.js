// hooks/useInsertTodos.js
import { useMutation } from "@tanstack/react-query";
import { addTodo } from "../service/Todo";

export const useInsertTodos = () => {
  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      console.log("Todo added successfully!");
    },
    onError: (error) => {
      console.error("Error inserting todo:", error.message);
    },
  });
};
