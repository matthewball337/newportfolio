import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-black'>
                      About
                    </p>
                </div>
                <div></div> 
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold'>
                <p>Hi, I&apos;m Matthew, nice to meet you. Please take a look around.</p>
              </div>
              <div>
                <p>
                  I am passionate about putting creativity and quality at the forefront
                  when creating every new piece of software, making sure that things
                  are done in a fast and efficient way that leaves clients impressed,
                  enjoying the process of learning all throughout the way. I have
                  worked with network administration and web development, have taken
                  classes in software engineering with big projects, and am willing to 
                  apply my knowledge further into the future.
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About