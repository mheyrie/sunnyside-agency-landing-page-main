import React from 'react'

const Testimonial = () => {
  return (
    <>
   
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            {/* <!-- Section Heading --> */}
            <h2 className="text-4xl font-bold text-center">
            What they’ve said
            </h2>
            {/* <!-- Testmonial Container --> */}
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            {/* <!-- First Testimonal --> */}
            <div id="testimonal-one" className="flex flex-col items-center p-6  mt-16 space-y-6 rounded-lg  md:w-1/3">
                <img src="src\assets\images\image-jennie.jpg" className="w-16 -mt-14" alt="Lady with hand on her hair" />
                <h5 className="text-lg font-bold">Anisha Li</h5>
                <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to maintain 
                visibility on larger milestones at all times keeps everyone motivated.”
                </p>
            </div>
            {/* <!-- Second Testimonal --> */}
            <div id="testimonal-two" className=" flex-col items-center p-6 mt-16  space-y-6 rounded-lg  md:w-1/3 md:flex">
                <img src="src\assets\images\image-thomas.jpg" id="img1" className="w-16 -mt-14" alt="A little girl" />
                <h5 className="text-lg font-bold">Ali Bravo</h5>
                <p className="text-sm text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since using 
                Manage. There is no more cross-channel confusion and everyone is much 
                more focused.”
                </p>
            </div>
            {/* <!-- Third Testimonal --> */}
            <div id="testimonal-three" className=" flex-col items-center p-6 mt-16  space-y-6 rounded-lg  md:w-1/3 md:flex">
                <img src="src\assets\images\image-emily.jpg" className="w-16 -mt-14" alt="An Old Man" />
                <h5 className="text-lg font-bold">Richard Watts</h5>
                <p className="text-sm text-darkGrayishBlue">
                “Manage allows us to provide structure and process. It keeps us organized 
                and focused. I can’t stop recommending them to everyone I talk to!”
                </p>
            </div>
            
        </div>
        </div>

        <div className=" grid grid-cols-2 md:flex md:flex-row">
            <div className="md:w-1/4 ">
                <img src="src\assets\images\desktop\image-gallery-milkbottles.jpg" alt="" />
            </div>
            <div className="md:w-1/4">
                <img src="src\assets\images\desktop\image-gallery-orange.jpg" alt="" />
            </div>
            <div className="md:w-1/4">
                <img src="src\assets\images\desktop\image-gallery-cone.jpg" alt="" />
            </div>
            <div className="md:w-1/4">
                <img src="src\assets\images\desktop\image-gallery-sugarcubes.jpg" alt="" />
            </div>
        </div>
      
    
    </>
  )
}

export default Testimonial

