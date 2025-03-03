import { createContext, useContext, useEffect, useState } from "react";

import { 
  ThemeType, 
  ThemeContextReturn, 
  ThemeContextProps 
} from "../interfaces/theme";

const ThemeContext = createContext<ThemeContextReturn | undefined>(undefined);

const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const defaultTheme: ThemeType = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches ? "light" : "dark"

  const [theme, setTheme] = useState<ThemeType>(defaultTheme);
  
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme); 
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

const useTheme: () => ThemeContextReturn = () => { 
  const context = useContext(ThemeContext);
  
  if (context === undefined) { 
    throw new Error("useTheme must be used within ThemeProvider!");
  }

  return context; 
}

export { ThemeProvider, useTheme };