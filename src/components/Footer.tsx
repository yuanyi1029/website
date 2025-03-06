import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer: React.FC = () => { 
  return ( 
    <footer className="
      container h-[8svh] md:h-[10svh] 
      flex justify-between items-center"
    >
      <div className="flex items-center gap-2 md:gap-5"> 
        <a 
          href="https://github.com/yuanyi1029/" 
          target="_blank"
          rel="noreferrer"
          className="text-text hover:text-hover"
        >
          <FaGithub className="text-[1.6rem]" /> 
        </a>
        <a 
          href="https://www.linkedin.com/in/wyuanyi/" 
          target="_blank"
          rel="noreferrer"
          className="text-text hover:text-hover"
        >
          <FaLinkedin className="text-[1.7rem]" /> 
        </a>
        <a 
          href="mailto:wyuanyi1029@gmail.com?subject=Mail%20From%20Yuanyi%27s%20Portfolio!"
          rel="noreferrer"
          className="text-text hover:text-hover"
        >
          <IoMdMail className="text-[2rem]" /> 
        </a>
      </div> 
      <p>Made with ❤️ by Yuanyi © 2025.</p>
    </footer>
  )
}
  
export default Footer; 