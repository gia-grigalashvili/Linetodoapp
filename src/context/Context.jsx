/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useUser } from "@clerk/clerk-react";
import PropTypes from "prop-types";

// Default context values for MyContext
const defaultContextValues = {
  userid: "",
};

// Create MyContext
export const MyContext = createContext(defaultContextValues);

// Custom hook to use MyContext
// eslint-disable-next-line react-refresh/only-export-components
export const useMyContext = () => useContext(MyContext);

// MyProvider Component
export const MyProvider = ({ children }) => {
  const { user } = useUser();
  const userid = user?.id;

  return <MyContext.Provider value={{ userid }}>{children}</MyContext.Provider>;
};

// PropTypes validation
MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
