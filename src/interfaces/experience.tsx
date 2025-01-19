import Icon from "./icon"; 

type ExperienceType = "Full Time" | "Part Time" | "Contract" | "Internship"; 

interface Experience { 
  startDate: string;
  endDate: string | null;
  company: string; 
  position: string; 
  type: ExperienceType; 
  description: string;
  icon: Icon;
}

export default Experience;