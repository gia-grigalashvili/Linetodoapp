import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// eslint-disable-next-line react/prop-types
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // const root = document.documentElement;
    // const body = document.body;

    // if (theme === "dark") {
    //   root.classList.add("dark");
    //   body.style.backgroundColor = "#1e1e2f"; // Dark background
    //   body.style.color = "#ffffff"; // Light text
    // } else {
    //   root.classList.remove("dark");
    //   body.style.backgroundColor = "#ffffff"; // Light background
    //   body.style.color = "#000000"; // Dark text
    // }
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
