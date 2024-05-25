import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FirstSection from "./components/FirstSection";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
  
    
    <BrowserRouter>
      <Navbar />
      
      <HeroSection/>
      <FirstSection/>
      <Testimonial/>
      <Footer/>

    </BrowserRouter>
    
  
    
  );
}

export default App;