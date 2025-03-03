type ThemeType = "light" | "dark"; 

interface ThemeContextReturn { 
  theme: ThemeType; 
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

interface ThemeContextProps {
  children: React.ReactNode; 
}

export type { 
  ThemeType, 
  ThemeContextReturn, 
  ThemeContextProps, 
};