import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    <HeroSection />
    </>
    
  );
}

export default App;