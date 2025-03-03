import { Routes, Route } from "react-router-dom"; 

import Navbar from "./components/Navbar";
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar /> 
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App;
