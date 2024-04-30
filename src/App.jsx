import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import { useState } from 'react'
import Navbar from "./components/Navbar"

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route/>
    )
  )

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
