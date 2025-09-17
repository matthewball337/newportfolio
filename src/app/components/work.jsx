import React from 'react'
import Link from 'next/link'
import GridItem from './components/GridItem'

const Work = () => {
  return (
    <div name='work' className='w-full h-full text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-black'>
                    <br /><br />Work</p>
                <p className='py-6'>&#92;&#92;Check out some of my recent work</p>
            </div>

            { /* Container */}
            <div className="grid m:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4">
                <GridItem backgroundImage="./assets/workImg.png" title="WordPress Application" options={["Demo", "Visit"]} links={["https://www.youtube.com/watch?v=EJcnxb7TY-o", "https://lmg-touring.net/las-vegas-studio/"]} />
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
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:-translate-y-2'>Demo</button>
                            </Link>
                            <Link href="https://github.com/matthewball337/AdvancedDataMiningProject">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:-translate-y-2'>Code</button>
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
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:-translate-y-2'>Demo</button>
                            </Link>
                            <Link href="https://github.com/mina-andrawis/LKLD">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:-translate-y-2'>Code</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                style={{backgroundImage: `url(./assets/yodeck.jpeg)`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-contain'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-center px-5000 font-bold text-white tracking-wider p-4'>
React Yodeck Application
                        </span>
                        <div className='pt-8 text-center'>
                            <Link href="https://youtu.be/jpQl4LU23jU">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:-translate-y-2'>Demo</button>'
                            </Link>
                            <Link href="https://yodeck-site.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:-translate-y-2'>Visit</button>
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