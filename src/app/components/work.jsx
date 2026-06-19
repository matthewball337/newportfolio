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
            <div className="grid work-grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <GridItem backgroundImage="./assets/workImg.png" title="WordPress Application" options={["Demo", "Visit"]} links={["https://www.youtube.com/watch?v=EJcnxb7TY-o", "https://lmgtouring.net/las-vegas-studio/"]} />
                <GridItem backgroundImage="./assets/advancedDataMining.png" title="Python Application" options={["Demo", "Code"]} links={["https://youtu.be/ZVb_hyPp00Q", "https://github.com/matthewball337/AdvancedDataMiningProject" ]} />
                <GridItem backgroundImage="./assets/softwareEngineeringCapstone.png" title="Software Engineering" options={["Demo", "Code"]} links={["https://www.youtube.com/watch?v=9d9_s5fxAq0", "https://github.com/mina-andrawis/LKLD"]} />
                <GridItem backgroundImage="./assets/yodeck.jpeg" title="React Digital Signage" options={["Demo", "Visit", "Gallery"]} links={["https://youtu.be/jpQl4LU23jU", "https://yodeck-site.vercel.app/", "/yodeck-gallery"]} />
                <GridItem backgroundImage="./assets/coil_thumbnail.png" title="CoiL Learning Center" options={["Demo", "Visit"]} links={["https://youtu.be/cdgwFG28w7o", "https://www.coillearningcenter.com/"]} />
            </div>
        </div>
    </div>
  )
}

export default Work