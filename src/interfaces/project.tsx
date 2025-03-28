import Image from "./image";
import { StackType } from "./stack";

interface Project { 
  title: string; 
  stack: StackType[];
  description: string;
  date: string; 
  image: Image | null; 
  hyperlink: string;
}

export default Project; 