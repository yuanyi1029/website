import { useTheme } from "../contexts/ThemeContext";

const Toggle: React.FC = () => {
  const { theme, setTheme } = useTheme(); 

  const toggleTheme: () => void = () => { 
    setTheme(theme === "light" ? "dark" : "light"); 
  }

  return (
    <div>
      <div className="
        relative flex gap-1"
      >
        <input 
          type="checkbox"
          id="themeToggle" 
          onChange={ toggleTheme } 
          checked={ theme === "light" ? false : true }
          className="
            w-[3rem] h-[1.5rem]
            peer appearance-none custom-pointer
            bg-hover rounded-2xl
            transition-colors duration-300"
        />
        <label 
          htmlFor="themeToggle" 
          className="
            w-[1.125rem] h-[1.125rem] 
            absolute top-[3.25px] left-[4px] 
            peer-checked:translate-x-[23px] custom-pointer
            bg-highlight rounded-2xl 
            transition-transform duration-300" 
        >
        </label>
        {
          theme === "light" ?
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="ionicon h-[18px] w-[18px] self-center text-text" 
            viewBox="0 0 512 512"
          >
            <path 
              fill="none" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeMiterlimit="10" 
              strokeWidth="32" 
              d="
                M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 
                369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 
                403.08l-33.94-33.94M142.86 142.86l-33.94-33.94
              "
            />
            <circle 
              cx="256" cy="256" r="80" 
              fill="none" stroke="currentColor" 
              strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"
            />
          </svg> :
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="ionicon h-[16px] w-[16px] self-center text-text" 
            viewBox="0 0 512 512"
          >
            <path 
              fill="none" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="32"
              d="
                M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 
                119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 
                11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z
              " 
            />
          </svg>
        }
      </div>
    </div>
  )
}

export default Toggle; 