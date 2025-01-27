import { Link } from "react-router-dom"; 
import { HashLink } from "react-router-hash-link";

const Navbar: React.FC = () => { 
  return ( 
    <nav className="
      container h-[15svh] 
      flex justify-between items-center"
    >
      <h2>Yuanyi Wong</h2>
      <ul className="flex">
        <li className="pl-10">
          <Link to="/">Home.</Link>
        </li>
        <li className="pl-10">
          <HashLink smooth to="/#projects">Projects.</HashLink>
        </li>
        <li className="pl-10">
          <Link to="/about">About.</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar; 