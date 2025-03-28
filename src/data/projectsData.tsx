import Project from "../interfaces/project";
import placeholder from "../assets/placeholder.png"; 

const projectsData: Project[] = [
  {
    title: "Portfolio Website 1", 
    stack: ["React", "SpringBoot", "TypeScript", "JavaScript", "Python", "Django", "IntelliJ"],
    description: "A simple portfolio webstie to showcase my work.", 
    date: new Date(2024, 1)
      .toLocaleString("en-US", { year: "numeric" }),
    image: {
      src: placeholder, 
      alt: "Portfolio Website Image", 
      label: "Portfolio Website"
    },
    hyperlink: "https://www.google.com/"
  },
  {
    title: "Portfolio Website 2",   
    stack: ["React", "SpringBoot", "TypeScript"],
    description: "A simple portfolio webstie to showcase my work.", 
    date: new Date(2024, 1)
    .toLocaleString("en-US", { year: "numeric" }),
    image: {
      src: placeholder, 
      alt: "Portfolio Website Image", 
      label: "Portfolio Website"
    },
    hyperlink: "https://www.google.com/"
  },
  {
    title: "Portfolio Website 3",
    stack: ["React", "SpringBoot", "TypeScript"],
    description: "A simple portfolio webstie to showcase my work.", 
    date: new Date(2024, 1)
    .toLocaleString("en-US", { year: "numeric" }),
    image: {
      src: placeholder, 
      alt: "Portfolio Website Image", 
      label: "Portfolio Website"
    },
    hyperlink: "https://www.google.com/"
  },
  {
    title: "Portfolio Website 4",  
    stack: ["React", "SpringBoot", "TypeScript"],
    description: "A simple portfolio webstie to showcase my work.", 
    date: new Date(2024, 1)
    .toLocaleString("en-US", { year: "numeric" }),
    image: {
      src: placeholder, 
      alt: "Portfolio Website Image", 
      label: "Portfolio Website"
    },
    hyperlink: "https://www.google.com/"
  },
]

export default projectsData;