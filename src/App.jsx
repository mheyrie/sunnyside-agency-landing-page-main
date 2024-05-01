import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter} from 'react-router-dom'
import { useState } from 'react'
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <BrowserRouter>
    
      <Navbar/>
    </BrowserRouter>
  )
}

export default App
