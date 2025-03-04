import Image from "./image";
import Identifier from "./identifier";

interface Project { 
  title: string; 
  type: Identifier;
  description: string;
  date: string; 
  image: Image | null; 
  hyperlink: string;
}

export default Project; 