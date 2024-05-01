import {NavLink} from 'react-router-dom';
import React from 'react'
import logo from "../assets/images/logo.svg"

const Navbar = () => {


  const linkClass = ({isActive}) => isActive ?
  "uppercase hover:text-white text-black bg-white rounded-full hover:bg-cyan-200 hover:uppercase px-3 py-3" : "rounded-full px-6 py-3"
  return (
    <>
        <nav className="bg-brightBlue border-b-8 border-white w-full top-0 fixed">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-start md:items-stretch md:justify-start">
                        <NavLink to='/' className="flex flex-shrink-0 items-center mr-4">
                          <img src={logo} alt="website logo" className="h-10 w-auto rounded-full" />
                        </NavLink>
                        <div className="hidden md:flex md:ml-auto">
                          <div className="flex space-x-2">
                            <NavLink to='/about' className={linkClass}>
                              About
                            </NavLink>
                            <NavLink to='/services' className={linkClass}>
                              Services
                            </NavLink>
                            <NavLink to='/projects' className={linkClass}>
                              Projects
                            </NavLink>
                            <NavLink to='/#' className={linkClass}>
                              Contact
                            </NavLink>
                          </div>
                        </div>
                        
                          
                        
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar