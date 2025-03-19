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
            <div>
                <img src='./assets/logo.png' alt="Logo Image" style={{width: '150px'}}/>
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
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#7df9ff] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* Social icons */}
            <div className='flex fixed flex-col top-[35%] left-0 sm:hidden'>
                <ul>
                    <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100] hover:ml-[-10] duration-300 bg-blue-600'>
                        <Link className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.linkedin.com/in/matthew-joseph-ball/">
                            Linkedin <FaLinkedin className="mr-[-10px] lg:mr-0 duration-300" size={30} />
                        </Link>
                    </li>
                    <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100] hover:ml-[-10] duration-300 bg-[#333333]'>
                        <Link className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/matthewball337">
                            Github <FaGithub className="mr-[-10px] lg:mr-0 duration-300" size={30} />
                        </Link>
                    </li>
                    <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100] hover:ml-[-10] duration-300 bg-[#6fc2b0]'>
                        <Link className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Email <HiOutlineMail className="mr-[-10px] lg:mr-0 duration-300" size={30} />
                        </Link>
                    </li>
                    <li className='w-[80px] md:w-[142px] lg:w-[160px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100] hover:ml-[-10] duration-300 bg-[#565f69]'>
                        <Link className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Resume <BsFillPersonLinesFill className="mr-[-10px] lg:mr-0 duration:300" size={30} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar