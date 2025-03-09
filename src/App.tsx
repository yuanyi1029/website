import { Routes, Route } from "react-router-dom"; 
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <ToastContainer 
          position="top-center"
          autoClose={ 2000 }
          limit={ 1 }
          hideProgressBar
        />
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
