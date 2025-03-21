import React from 'react'
import Link from 'next/link'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-black'>
                    <br /><br />Work</p>
                <p className='py-6'>&#92;&#92;Check out some of my recent work</p>
            </div>

            { /* Container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                {/* Grid Item */}
                <div
                style={{backgroundImage: `url(./assets/workImg.png)`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
WordPress Application
                        </span>
                        <div className='pt-8 text-center'>
                            <Link href="https://lmgtouring.net/las-vegas-studio/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Visit</button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div
                style={{backgroundImage: `url(./assets/advancedDataMining.png)`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-yellow-500 tracking-wider'>
Python Application
                        </span>
                        <div className='pt-8 text-center'>
                            <Link href="https://youtu.be/ZVb_hyPp00Q">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </Link>
                            <Link href="https://github.com/matthewball337/AdvancedDataMiningProject">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div
                style={{backgroundImage: `url(./assets/softwareEngineeringCapstone.png)`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-center font-bold text-red-900 tracking-wider p-4'>
Software Engineering
                        </span>
                        <div className='pt-8 text-center'>
                            <Link href="https://www.youtube.com/watch?v=9d9_s5fxAq0">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </Link>
                            <Link href="https://github.com/mina-andrawis/LKLD">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work