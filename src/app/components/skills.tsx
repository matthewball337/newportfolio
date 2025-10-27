import React from 'react'
import Image from 'next/image'

//import WordPress from "./assets/wordpress.png"

const Skills = () => {
  return (
    <div id='skills' className='w-full h-full bg-[#0096ff] text-gray-300 py-4'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-black'><br />
          <br /><br />Skills</p>
          <p className='py-4'>&#92;&#92; These are the technologies I&apos;ve worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 bg-[#0a192f]'>
            <Image className='w-20 mx-auto' width={240} height={271} src='/assets/cplusplus.png' alt="C++ icon" />
            <p className='my-4'>C++</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 bg-[#0a192f]'>
            <Image className='w-auto h-[90px] mx-auto' width={250} height={250} src='/assets/tailwind.png' alt="Notepad++ icon" />
            <p className='my-4'>Tailwind CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 bg-[#0a192f]'>
            <Image className='w-20 mx-auto' src='/assets/node.png' width={250} height={250} alt="Node.js icon" />
            <p className='my-4'>NODE JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 bg-[#0a192f]'>
            <Image className='w-20 mx-auto' width={242} height={266} src='/assets/python.png' alt="Python icon" />
            <p className='my-4'>PYTHON</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 bg-[#0a192f]'>
            <Image className='w-20 mx-auto' width={250} height={250} src='/assets/react.png' alt="React.js icon" />
            <p className='my-4'>REACT JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 bg-[#0a192f]'>
            <Image className='w-auto h-[80px] mx-auto' width={1000} height={1000} src='/assets/wordpress.png' alt="WordPress icon" />
            <p className='my-4'>WORDPRESS WITH DIVI</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills