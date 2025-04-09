import Project from "../interfaces/project";
import placeholder from "../assets/placeholder.png"; 
import tetris from "../assets/tetris.png"; 
import finance from "../assets/finance.png";

const projectsData: Project[] = [
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
    hyperlink: "https://github.com/yuanyi1029/tetris"
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
    hyperlink: "https://github.com/yuanyi1029/financetracker"
  },
]

export default projectsData;