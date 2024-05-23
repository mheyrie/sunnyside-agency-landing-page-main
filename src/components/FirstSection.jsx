import React from 'react'
import firstSImage from '../assets/images/desktop/image-transform.jpg'


const FirstSection = () => {
  return (
    <>
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">

        {/* Left Side Container */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">Transform your brand</h1>
          <p className="text-softRed text-center md:text-5xl md:text-left">
          We are a full-service creative agency specializing in helping brands grow fast. 
          Engage your clients through compelling visuals that do most of the marketing for you.
          </p>
          <h3 className="text-center"> Learn more</h3>
        </div>

        {/* Right Side Container */}
        <div className="md:w-1/2">
          <img src={firstSImage} alt="" />
        </div>
      </div>
    </>
  )
}

export default FirstSection