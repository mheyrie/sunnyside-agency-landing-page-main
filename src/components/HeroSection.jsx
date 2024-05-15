import React from 'react'
import arrow from '../assets/images/icon-arrow-down.svg'

const HeroSection = () => {
    
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[40rem] bg-heroSection bg-cover bg-center bg-no-repeat mt-[-8px]">
        
          <div className="">
            <h1 className="text-center text-5xl font-bold mt-[-15rem] text-white"> WE ARE CREATIVES</h1>
          </div>
          <div>
            <img src={arrow} alt="" />
          </div>
          
        </div>
        
      
    
    </>
    
    

     
  )
}

export default HeroSection