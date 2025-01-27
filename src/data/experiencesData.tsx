import Experience from "../interfaces/experience";
import ant from "../assets/ant.png";
import keysight from "../assets/keysight.png";

const experiencesData: Experience[] = [
  { 
    company: "Ant International", 
    position: "Backend Engineer Intern", 
    type: "Internship", 
    description: "Implemented a backend system that integrates middleware for \
      business merchants to be able to complete settlements after a payment \
      month. Configured databases for efficient handling of merchant \
      settlement requests as well.", 
    startDate: new Date(2024, 11)
      .toLocaleString("en-US", { month: "short", year: "numeric" }),
    endDate: new Date(2025, 2)
      .toLocaleString("en-US", { month: "short", year: "numeric" }), 
    icon: { 
      src: ant, 
      alt: "Ant International Logo", 
      label: "Ant International"
    }
  }, 
  { 
    company: "Keysight Technologies", 
    position: "Software Application Intern", 
    type: "Internship", 
    description: "Implemented a product testing record system backend using \
      Django REST framework, pioneering server response times of less than 1 \
      second.", 
    startDate: new Date(2023, 11)
      .toLocaleString("en-US", { month: "short", year: "numeric" }),
    endDate: new Date(2024, 2)
      .toLocaleString("en-US", { month: "short", year: "numeric" }),
    icon: { 
      src: keysight, 
      alt: "Keysight Technologies Logo", 
      label: "Keysight Technologies"
    }
  }, 
]

export default experiencesData; 