import Image from "./image"; 

type ExperienceType = "Full Time" | "Part Time" | "Contract" | "Internship"; 

interface Experience { 
  company: string; 
  position: string; 
  type: ExperienceType; 
  description: string;
  startDate: string;
  endDate: string | null;
  icon: Image;
}

export default Experience;