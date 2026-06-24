import Hero from "../components/Hero"; 
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

const Home: React.FC = () => { 
  return ( 
    <>
      <Hero /> 
      <Projects />
      <Skills /> 
      <Experience /> 
    </>
  )
}

export default Home; 