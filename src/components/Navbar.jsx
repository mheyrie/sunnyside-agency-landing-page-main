import {NavLink} from 'react-router-dom';
import React from 'react'
import logo from "../assets/images/logo.svg"

const Navbar = () => {
  return (
    <>
        <nav className="bg-brightBlue border-b-8 border-white w-full top-0 fixed">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-start md:items-stretch md:justify-start">
                        <NavLink to='/' className="flex flex-shrink-0 items-center mr-4">
                          <img src={logo} alt="website logo" className="h-10 w-auto rounded-full" />
                          <span className="text-black">Hellooo</span>
                        </NavLink>
                          
                        
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar