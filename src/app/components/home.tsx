'use client'

import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div id='home' className='w-full h-screen bg-[#0096ff] text-gray-200'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-black'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Matthew Ball</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#a6a8b1]'>I&apos;m a Software Developer.</h2>
                <p className='text-[#c9ccd7] py-4 max-w-[700px]'>I&apos;m a software developer and former network administrator who puts
                    creativity and quality first by ensuring projects run smoothly
                    and maintaining client satisfaction through teamwork and
                    leadership skills. Currently, my focus is on building responsive
                    web applications.
                </p>
                <div>
                    <Link to="work" smooth={true} duration={500}>
                      <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600
                        hover:border-pink-600'>
                          View Work
                          <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                          </span>
                      </button>
                    </Link>
                </div>
            </div>
    </div>
  )
}

export default Home