import React from 'react'

//import WordPress from "./assets/wordpress.png"

const Skills = () => {
  return (
    <div id='skills' className='w-full h-screen bg-[#0096ff] text-gray-300 py-4'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-black'>Skills</p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='./assets/cplusplus.png' alt="C++ icon" />
            <p className='my-4'>C++</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-auto h-[90px] mx-auto' src='./assets/notepadplusplus.png' alt="Notepad++ icon" />
            <p className='my-4'>NOTEPAD++</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='./assets/node.png' alt="Node.js icon" />
            <p className='my-4'>NODE JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='./assets/python.png' alt="Python icon" />
            <p className='my-4'>PYTHON</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='./assets/react.png' alt="React.js icon" />
            <p className='my-4'>REACT JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-auto h-[80px] mx-auto' src='./assets/wordpress.png' alt="WordPress icon" />
            <p className='my-4'>WORDPRESS WITH DIVI</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills