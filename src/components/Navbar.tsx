import { Link } from "react-router-dom"; 
import { HashLink } from "react-router-hash-link";
import menu from "../assets/menu.svg"; 
import { useState } from "react";

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
      <h2>
        Yuanyi Wong.
      </h2>
      <img 
        src={ menu } 
        alt="Menu Icon" 
        onClick={ toggleMenu }
        className="h-8 w-8 cursor-pointer md:hidden"
        />
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
          <Link 
            to="/" 
            onClick={ closeMenu }
            className="
              block p-2 md:py-0 
              bg-grey-secondary md:bg-transparent rounded-2xl 
              hover:text-grey-primary"
          >
            Home.
          </Link> 
        </li>
        <li className="rounded-2xl">
          <HashLink 
            smooth 
            to="/#projects" 
            onClick={ closeMenu }
            className="
              block p-2 md:py-0 
              bg-grey-secondary md:bg-transparent rounded-2xl 
              hover:text-grey-primary"
          >
            Projects.
          </HashLink>
        </li>
        <li className="rounded-2xl">
          <Link 
            to="/about" 
            onClick={ closeMenu }
            className="
              block p-2 md:py-0 
              bg-grey-secondary md:bg-transparent rounded-2xl 
              hover:text-grey-primary"
          >
            About.
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar; 