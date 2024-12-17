import { createContext, useContext, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useGetTodos } from "../hooks/useGetTodos";
import useInsertTodos from "../hooks/iinsertTodos";
import { format } from "date-fns";

// Create context
const TodoContext = createContext();

// Create a custom hook to use the context
export const useTodoContext = () => {
  return useContext(TodoContext);
};

// Create provider component
export const TodoProvider = ({ children }) => {
  const formattedDate = format(new Date(), "dd/MM/yy");
  const { user } = useUser();
  const { data, error, isLoading, isError } = useGetTodos(user.id);
  const { mutateAsync: addTodo } = useInsertTodos();
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    if (description.trim() !== "") {
      await addTodo({ description, user_id: user.id, date: formattedDate });
      setDescription("");
    }
  };

  return (
    <TodoContext.Provider
      value={{
        formattedDate,
        user,
        data,
        error,
        isLoading,
        isError,
        description,
        setDescription,
        handleAddTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
