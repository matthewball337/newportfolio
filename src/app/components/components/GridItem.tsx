import { Anybody } from "next/font/google";
import Link from "next/link"

interface GridItemProps {
    backgroundImage: string;
    title: string;
    options: string[];
    links: string[];
}

export default function GridItem({
    backgroundImage = "",
    title = "Untitled",
    options = [],
    links = [],
}: GridItemProps) {

    if(options.length !== links.length) {
        console.log(options);
        console.log(links);
        console.log("Grid item length not matching")
        return null;
    }
    return (
    <div
        style={{backgroundImage: `url(${backgroundImage})`}}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

        {/* Black Overlay */}
        {/* <div className="relative w-full h-full opacity-70 bg-black" /> */}
    
        {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 bg-pink-600 bg-opacity-70 p-4'>
                <span className='text-2xl font-bold text-white tracking-wider flex'>
                    {title}
                </span>
                <div className='pt-8 text-center'>
                    {options.map((option: string, index: number) => (
                        <Link key={index} href={links[index]}>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:-translate-y-2'>{option}</button>
                        </Link>
                    ))}
                </div>
            </div>
         </div>
    );
}