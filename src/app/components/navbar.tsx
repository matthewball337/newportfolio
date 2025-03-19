'use client'

import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className="fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#0096ff] text-gray-200">
            <div className="flex grid-cols-2">
                <img src='./assets/logo.png' alt="Logo Image" style={{width: '150px'}}/>
                <div className="flex grid-cols-4 pt-4">
                    <div className="bg-blue-600 text-gray-300 p-2 max-h-[40px] hover:scale-110 duration-500"><Link href="https://www.linkedin.com/in/matthew-joseph-ball"><FaLinkedin size={30} /></Link></div>
                    <div className="bg-[#333333] text-gray-300 p-2 max-h-[40px] hover:scale-110 duration-500"><Link href="https://github.com/matthewball337"><FaGithub size={30} /></Link></div>
                    <div className="bg-[#6fc2b0] text-gray-300 p-2 max-h-[40px] hover:scale-110 duration-500"><HiOutlineMail size={30}/></div>
                    <div className="bg-[#565f69] text-gray-300 p-2 max-h-[40px] hover:scale-110 duration-500"><BsFillPersonLinesFill size={30}/></div>
                </div>
            </div>
            {/* menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-blue-600 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar