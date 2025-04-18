type ThemeType = "light" | "dark"; 

interface ThemeContextReturn { 
  theme: ThemeType; 
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

interface ThemeContextChildren {
  children: React.ReactNode; 
}

export type { 
  ThemeType, 
  ThemeContextReturn, 
  ThemeContextChildren, 
};