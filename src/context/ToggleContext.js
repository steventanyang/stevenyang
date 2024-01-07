import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleTheme = () => {
    setIsToggled(!isToggled);
  };

  return (
    <ThemeContext.Provider value={{ isToggled, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


