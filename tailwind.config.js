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
        "grey-primary": "#404040", 
        "grey-secondary": "#E6E7E7", 
        "white-primary": "#F6F6F6"
      }, 
      fontFamily: {
        "sans": ["Work Sans", "sans-serif"]
      }, 
      fontWeight: { 
        "normal": 400,
        "bold": 600  
      }
    },
  },
  plugins: [],
}