import React from 'react'

const Footer = () => {
  return (
    <>
        <section className="bg-[#90D4C5] flex flex-col justify-center items-center">
            <div className="mt-10 mb-10 ">
                <img src="src\assets\images\logo footer.svg" className="" alt="" />
            </div>
            <div className="space-x-6  mb-10">
                
                    <span>About</span>
                    <span>Services</span>
                    <span>Projects</span>
                
            </div>
            <div className="gap-6 flex  mb-10">
                <a href="#"><img src="src\assets\images\icon-facebook.svg" alt="" /></a>
                <a href="#"><img src="src\assets\images\icon-instagram.svg" alt="" /></a>
                <a href="#"><img src="src\assets\images\icon-twitter.svg" alt="" /></a>
                <a href="#"><img src="src\assets\images\icon-pinterest.svg" alt="" /></a>
            </div>
            
        </section>
           

    </>
  )
}

export default Footer