import { useState } from "react";
import { Link } from "react-router-dom"; 
import { HashLink } from "react-router-hash-link";

import Toggle from "./Toggle"; 
import menu from "../assets/menu.svg"; 

const Navbar: React.FC = () => { 
  const [menuOpen, setMenuOpen] = useState<boolean>(false); 

  const toggleMenu: () => void = () => { 
    setMenuOpen(previousState => !previousState); 
  }

  const closeMenu: () => void = () => { 
    setMenuOpen(false); 
  }

  return ( 
    <nav className="
      container h-[8svh] md:h-[15svh] 
      flex justify-between items-center relative"
    >
      <div className="flex items-center gap-5">
        <h2>
          Yuanyi Wong.
        </h2>
        <Toggle />
      </div>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        onClick={ toggleMenu }
        className="ionicon h-8 w-8 cursor-pointer md:hidden text-text" 
        viewBox="0 0 512 512"
      >
        <path 
          fill="none" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeMiterlimit="10" 
          strokeWidth="48" 
          d="M88 152h336M88 256h336M88 360h336"
        />
      </svg>
      <ul className={ `
        h-auto w-[100%] md:w-auto
        absolute md:static top-full left-0 z-50
        flex flex-col md:flex-row    
        gap-2 md:gap-10 px-2 py-4 md:p-0
        bg-white md:bg-transparent
        rounded-b-2xl md:rounded-none
        shadow-lg md:shadow-none 
        ${ menuOpen === true ? "visible" : "invisible" } md:visible` }
      >
        <li className="rounded-2xl">
          <h3>
            <Link 
              to="/" 
              onClick={ closeMenu }
              className="
                block p-2 md:py-0 
                bg-highlight md:bg-transparent rounded-2xl 
                hover:text-hover"
            >
              Home.
            </Link> 
          </h3>
        </li>
        <li className="rounded-2xl">
          <h3>
            <HashLink 
              smooth 
              to="/#projects" 
              onClick={ closeMenu }
              className="
                block p-2 md:py-0 
                bg-highlight md:bg-transparent rounded-2xl 
                hover:text-hover"
            >
              Projects.
            </HashLink>
          </h3>
        </li>
        <li className="rounded-2xl">
          <h3>
            <Link 
              to="/about" 
              onClick={ closeMenu }
              className="
                block p-2 md:py-0 
                bg-highlight md:bg-transparent rounded-2xl 
                hover:text-hover"
            >
              About.
            </Link>
          </h3>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar; 