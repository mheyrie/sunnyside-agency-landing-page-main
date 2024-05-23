import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FirstSection from "./components/FirstSection";


function App() {
  return (
  
    
    <BrowserRouter>
      <Navbar />
      
      <HeroSection/>
      <FirstSection/>
    </BrowserRouter>
    
  
    
  );
}

export default App;