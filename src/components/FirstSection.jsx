import React from 'react'
import firstSImage from '../assets/images/desktop/image-transform.jpg'
import secondSImage from '../assets/images/desktop/image-stand-out.jpg'



const FirstSection = () => {
  return (
    <>
    {/* First Sec */}
    <div className="flex flex-col-reverse items-center mx-0 mt-0 space-y-0 md:space-y-0 md:flex-row">

      {/* Left Side Container */}
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2 p-20">
        <h1 className="max-w-md text-5xl font-sans font-black text-center md:text-5xl md:text-left">Transform your brand</h1>
        <p className="text-neutral-veryDarkGrayishBlue text-center md:text-xl md:text-left">
        We are a full-service creative agency specializing in helping brands grow fast. 
        Engage your clients through compelling visuals that do most of the marketing for you.
        </p>
        <h3 className="text-xl text-center font-sans font-bold uppercase underline decoration-primary-yellow md:text-left"> Learn more</h3>
      </div>

      {/* Right Side Container */}
      <div className="flex flex-col md:w-1/2 ">
        <img src={firstSImage} alt="" className="z-10"/>
      </div>
    </div>

    {/* Second sec */}
    <div className="flex flex-col items-center mx-0 mt-0 space-y-0 md:space-y-0 md:flex-row">

      {/* Left Side Container */}
      <div className="flex flex-col md:w-1/2 ">
        <img src={secondSImage} alt="" className="z-10"/>
      </div>

      {/* Right Side Container */}
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2 p-20">
        <h1 className="max-w-md text-5xl font-sans font-black text-center md:text-5xl md:text-left">Stand out to the right audience</h1>
        <p className="text-neutral-veryDarkGrayishBlue text-center md:text-xl md:text-left">
        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
        </p>
        <h3 className="text-xl text-center font-sans font-bold uppercase underline decoration-primary-yellow md:text-left"> Learn more</h3>
      </div>
    </div>

    {/* Third sec */}
    <div className="flex flex-col items-center mx-0 mt-0 space-y-0 md:space-y-0 md:flex-row">

      {/* Left Side Container */}
      <div className="flex flex-col md:w-1/2 justify-center items-center bg-firstSection1 bg-cover bg-center bg-no-repeat min-h-[50rem]">
        <h1>Graphic design</h1>
        <p className="text-center">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention</p>
      </div>

      {/* Right Side Container */}
      <div className="flex flex-col md:w-1/2 justify-center items-center bg-firstSection2 bg-cover bg-center bg-no-repeat min-h-[50rem]">
        <h1>Photography</h1>
        <p className="text-center">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
      </div>
    </div>

   </>
  )
}

export default FirstSection