import React, { useMemo } from "react";
import { createContext, useState } from "react";

export type Theme = "light" | "dark";

type Children = {
  children: JSX.Element;
};

type ThemeContext = {
  theme: Theme;
  toggleTheme?: () => void;
};

export const ThemeContext = createContext<ThemeContext>({ theme: "light" });

export const ThemeProvider = ({ children }: Children) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  const color = theme === "light" ? "#333" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
