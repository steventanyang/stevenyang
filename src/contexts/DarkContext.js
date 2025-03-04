import React, { createContext, useState, useCallback, useMemo } from "react";

export const DarkContext = createContext({});

export const DarkProvider = ({ children }) => {
  const [theme, setThemeState] = useState("light");
  const [isToggled, setIsToggled] = useState(false);
  
  // Memoize theme values
  const themeValues = useMemo(() => ({
    backgroundColor: theme === "light" ? "#FEFFDD" : "#0A0A0A",
    color: theme === "light" ? "#424242" : "#FEFFDD",
  }), [theme]);
  
  // Optimize theme switching
  const setTheme = useCallback((newTheme) => {
    // Apply theme changes to document body directly for better performance
    if (newTheme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    setThemeState(newTheme);
  }, []);
  
  const value = {
    theme,
    setTheme,
    isToggled,
    setIsToggled,
    ...themeValues
  };
  
  return (
    <DarkContext.Provider value={value}>
      {children}
    </DarkContext.Provider>
  );
};