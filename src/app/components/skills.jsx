import React from 'react'

//import GitHub from "./assets/github.png"
//import Node from "./assets/node.png"
//import Python from "./assets/python.png"
//import ReactImage from "./assets/react.png"
//import WordPress from "./assets/wordpress.png"

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0096ff] text-gray-300 py-4'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-black'>Experience</p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='./assets/cplusplus.png' alt="C++ icon" />
            <p className='my-4'>C++</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills