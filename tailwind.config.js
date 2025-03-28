/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        "text": "var(--text)",
        "hover": "var(--hover)", 
        "highlight": "var(--highlight)",
        "background": "var(--background)", 
        "outline": "var(--outline)", 
        "accent": "var(--accent)",
        "shadow": "var(--shadow)", 
      }, 
      fontFamily: {
        "sans": ["Work Sans", "sans-serif"]
      }, 
      fontWeight: { 
        "normal": 400,
        "semi-bold": 500,
        "bold": 600  
      }, 
      dropShadow: { 
        sm: "4px 4px 8px var(--shadow)",
        lg: "12px 12px 16px var(--shadow)"
      }
    },
  },
  plugins: [],
}