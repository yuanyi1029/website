import Hero from "../components/Hero"; 
import Projects from "../components/Projects";
import Contact from "../components/Contact"; 

const Home: React.FC = () => { 
  return ( 
    <>
      <Hero /> 
      <Projects />
      <Contact /> 
    </>
  )
}

export default Home; 