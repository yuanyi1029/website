import Project from "./Project"; 

const Projects: React.FC = () => { 
  return ( 
    <section id="projects" className="container">
      <h1>Features Projects.</h1>
      <div> 
        <Project /> 
        <Project /> 
      </div>
    </section>
  )
}

export default Projects; 