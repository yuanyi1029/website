import { Link } from "react-router-dom"; 
import { HashLink } from "react-router-hash-link";

const Navbar: React.FC = () => { 
  return ( 
    <nav className="container">
      <h2>Yuanyi Wong</h2>
      <ul>
        <li>
          <Link to="/">Home.</Link>
        </li>
        <li>
          <HashLink smooth to="#projects">Projects.</HashLink>
        </li>
        <li>
          <Link to="/about">About.</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar; 