import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer: React.FC = () => { 
  return ( 
    <footer className="container">
      <FaGithub size="1.5rem"/> 
      <FaLinkedin size="1.5rem" /> 
      <IoMdMail size="1.5rem" /> 
      <p>Made with ❤️ by Yuanyi © 2025.</p>
    </footer>
  )
}
  
export default Footer; 