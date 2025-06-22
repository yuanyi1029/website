import Project from "../interfaces/project";
import placeholder from "../assets/placeholder.png"; 
import optimizer from "../assets/optimizer.png";
import santorini from "../assets/santorini.png";
import tetris from "../assets/tetris.png"; 
import finance from "../assets/finance.png";

const projectsData: Project[] = [
  {
    title: "Model Optimizer Tool",   
    stack: ["PyTorch", "TensorFlow", "Streamlit"],
    description: "The description for the model optimizer tool.",
    date: new Date(2025, 1)
    .toLocaleString("en-US", { year: "numeric" }),
    image: {
      src: optimizer, 
      alt: "Model Optimizer Tool", 
      label: "Model Optimizer Tool"
    },
    hyperlink: "https://youtu.be/acaEMnF4qD4"
  },
  {
    title: "Santorini Desktop Game",   
    stack: ["Java"],
    description: "A desktop version of the classic turn-based Santorini board game built with the Model View Controller (MVC) architecture.",
    date: new Date(2025, 1)
    .toLocaleString("en-US", { year: "numeric" }),
    image: {
      src: santorini, 
      alt: "Santorini Desktop Game Image", 
      label: "Santorini Desktop Game"
    },
    hyperlink: "https://youtu.be/7m_r1CqQhjE"
  },
  {
    title: "Tetris Web Game", 
    stack: ["TypeScript", "HTML", "CSS"],
    description: "A simple browser-based game of tetris.", 
    date: new Date(2023, 1)
      .toLocaleString("en-US", { year: "numeric" }),
    image: {
      src: tetris, 
      alt: "Tetris Web Game Image", 
      label: "Tetris Web Game"
    },
    hyperlink: "https://youtu.be/K_BIOWSXTMM"
  },
  {
    title: "Finance Tracker Web Application",   
    stack: ["Django", "HTML", "CSS", "JavaScript"],
    description: "My very first web application in my computer science journey, created as the capstone project for the CS50W course I took.", 
    date: new Date(2023, 1)
    .toLocaleString("en-US", { year: "numeric" }),
    image: {
      src: finance, 
      alt: "Finance Tracker Web Application Image", 
      label: "Finance Tracker Web Applicatione"
    },
    hyperlink: "https://youtu.be/Y7p4wvrOxyo"
  },
]

export default projectsData;