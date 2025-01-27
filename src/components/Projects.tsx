import Card from "./Card"; 
import projectsData from "../data/projectsData";

const Projects: React.FC = () => { 
  const projectsDataChunk = projectsData
    .map((_, index) => { 
      return (index % 2 === 0 ? projectsData.slice(index, index + 2) : null)
    })
    .filter((eachProject) => { 
      return (eachProject !== null)
    }); 

  return ( 
    <section id="projects" className="container border-t-2 border-grey-secondary">
      <h1 className="py-[2rem]">Features Projects.</h1>
      { 
        projectsDataChunk.map(eachProjectChunk => { 
          return (
            <div className="
              grid grid-cols-2 gap-[5rem] pb-[2rem]"
            > 
              {
                eachProjectChunk[0] && (
                  <div className="col-span-1">
                    <Card { ...eachProjectChunk[0] } /> 
                  </div>
                )
              }
              {
                eachProjectChunk[1] && ( 
                  <div className="col-span-1">
                    <Card { ...eachProjectChunk[1] } /> 
                  </div>
                )
              }
            </div>
          )
        })
      }
    </section>
  )
}

export default Projects; 