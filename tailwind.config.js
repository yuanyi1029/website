/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        "black-primary": "#000000", 
        "grey-primary": "#707070", 
        "grey-secondary": "#E6E7E7", 
        "white-primary": "#F6F6F6"
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
        sm: "4px 4px 8px rgba(0, 0, 0, 0.25)",
        lg: "12px 12px 16px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
}