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
  // {
  //   title: "Portfolio Website 3 Portfolio Website 3",
  //   stack: ["React", "SpringBoot", "TypeScript"],
  //   description: "A simple portfolio webstie to showcase my work. A simple portfolio webstie to showcase my work. A simple portfolio webstie to showcase my work. A simple portfolio webstie to showcase my work.", 
  //   date: new Date(2024, 1)
  //   .toLocaleString("en-US", { year: "numeric" }),
  //   image: {
  //     src: placeholder, 
  //     alt: "Portfolio Website Image", 
  //     label: "Portfolio Website"
  //   },
  //   hyperlink: "https://www.google.com/"
  // },
  // {
  //   title: "Portfolio Website 4",  
  //   stack: ["React", "SpringBoot", "TypeScript", "Python", "VS Code", "Postman", "MongoDB", "Linux", "HTML" ],
  //   description: "A simple portfolio webstie to showcase my work. A simple portfolio webstie to showcase my work. A simple portfolio webstie to showcase my work. A simple portfolio webstie to showcase my work. A simple portfolio webstie to showcase my work. A simple portfolio webstie to showcase my work.A simple portfolio webstie to showcase my work. A simple portfolio webstie to showcase my work.", 
  //   date: new Date(2024, 1)
  //   .toLocaleString("en-US", { year: "numeric" }),
  //   image: {
  //     src: placeholder, 
  //     alt: "Portfolio Website Image", 
  //     label: "Portfolio Website"
  //   },
  //   hyperlink: "https://www.google.com/"
  // },
]

export default projectsData;