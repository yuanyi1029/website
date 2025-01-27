import Project from "../interfaces/project";
import placeholder from "../assets/placeholder.png"; 

const projectsData: Project[] = [
  {
    title: "Portfolio Website 1", 
    type: {
      type: "Personal", 
      colour: "#DB4437"
    },
    description: "A simple portfolio webstie to showcase my work.", 
    date: new Date(2024, 1)
      .toLocaleString("en-US", { year: "numeric" }),
    image: {
      src: placeholder, 
      alt: "Portfolio Website Image", 
      label: "Portfolio Website"
    }
  },
  {
    title: "Portfolio Website 2",   
    type: {
      type: "Personal", 
      colour: "#4285F4"
    },
    description: "A simple portfolio webstie to showcase my work.", 
    date: new Date(2024, 1)
    .toLocaleString("en-US", { year: "numeric" }),
    image: {
      src: placeholder, 
      alt: "Portfolio Website Image", 
      label: "Portfolio Website"
    }
  },
  {
    title: "Portfolio Website 3",   
    type: {
      type: "Personal", 
      colour: "#DB4437"
    },
    description: "A simple portfolio webstie to showcase my work.", 
    date: new Date(2024, 1)
    .toLocaleString("en-US", { year: "numeric" }),
    image: {
      src: placeholder, 
      alt: "Portfolio Website Image", 
      label: "Portfolio Website"
    }
  },
  {
    title: "Portfolio Website 4",  
    type: {
      type: "Personal", 
      colour: "#4285F4"
    },
    description: "A simple portfolio webstie to showcase my work.", 
    date: new Date(2024, 1)
    .toLocaleString("en-US", { year: "numeric" }),
    image: {
      src: placeholder, 
      alt: "Portfolio Website Image", 
      label: "Portfolio Website"
    }
  },
]

export default projectsData;