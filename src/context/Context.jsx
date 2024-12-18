import React, { createContext, useContext, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import PropTypes from "prop-types";
import { useGetTodos } from "../hooks/useGetTodos";
import useInsertTodos from "../hooks/iinsertTodos";
import { format } from "date-fns";

// Default context values for MyContext
const defaultContextValues = {
  userid: "",
};

// Create MyContext
export const MyContext = createContext(defaultContextValues);

// Create TodoContext
const TodoContext = createContext();

// Create custom hooks to use the contexts
export const useMyContext = () => useContext(MyContext);
export const useTodoContext = () => useContext(TodoContext);

// Create provider components
export const MyProvider = ({ children }) => {
  const { user } = useUser();
  const userid = user?.id;

  return <MyContext.Provider value={{ userid }}>{children}</MyContext.Provider>;
};

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

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
