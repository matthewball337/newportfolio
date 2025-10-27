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
                <GridItem backgroundImage="./assets/advancedDataMining.png" title="Python Application" options={["Demo", "Code"]} links={["https://youtu.be/ZVb_hyPp00Q", "https://github.com/matthewball337/AdvancedDataMiningProject" ]} />
                <GridItem backgroundImage="./assets/softwareEngineeringCapstone.png" title="Software Engineering" options={["Demo", "Code"]} links={["https://www.youtube.com/watch?v=9d9_s5fxAq0", "https://github.com/mina-andrawis/LKLD"]} />
                <GridItem backgroundImage="./assets/yodeck.jpeg" title="React Digital Signage" options={["Demo", "Visit", "Gallery"]} links={["https://youtu.be/jpQl4LU23jU", "https://yodeck-site.vercel.app/", "/yodeck-gallery"]} />
            </div>
        </div>
    </div>
  )
}

export default Work