import React, { createContext } from "react";
import { useUser } from "@clerk/clerk-react";
import PropTypes from "prop-types";
const defaultContextValues = {
  userid: "",
};

export const MyContext = createContext(defaultContextValues);

export const MyProvider = ({ children }) => {
  const { user } = useUser();
  const userid = user?.id;
  return <MyContext.Provider value={{ userid }}>{children}</MyContext.Provider>;
};
MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
