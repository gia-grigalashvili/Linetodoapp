// Context.js
import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

// eslint-disable-next-line react/prop-types
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Missing state for search term
  const [isSearchOpen, setSearchOpen] = useState(false); // Missing state for search open

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter todos based on the search term
  const filteredTodos = todos.filter((todo) =>
    todo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        setTodos,
        toggleSearch,
        handleSearchChange,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
