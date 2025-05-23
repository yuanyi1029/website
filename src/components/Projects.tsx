import Card from "./Card"; 
import Scroll from "./Scroll";
import projectsData from "../data/projectsData";

const Projects: React.FC = () => { 
  return ( 
    <section 
      id="projects" 
      className="container py-8 border-t-2 border-highlight"
    >
      <Scroll>
        <h1 className="pb-[1rem]">Featured Projects.</h1>
        <div className="
          grid grid-cols-1 md:grid-cols-2"
        >
          {
            projectsData.map((eachProject, projectIndex) => {
              return (
                <Card 
                  { ...eachProject }
                  key={ projectIndex } 
                />
              )
            })
          }
        </div>
      </Scroll>
    </section>
  )
}

export default Projects;