'use client'

import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'
import * as Scroll from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className="fixed w-full h-[100px] flex justify-between items-center px-4 z-10 bg-[#0096ff] text-gray-200">
            <div className="flex grid-cols-2">
                <Image className="invert w-[150px]" src='/assets/logo.png'
                    alt="Logo Image" width={1152} height={648} />
                <div className="flex grid-cols-3 pt-4">
                    <div className="bg-blue-600 text-gray-300 p-2 max-h-[40px] hover:scale-110 duration-500">
                        <Link href="https://www.linkedin.com/in/matthew-joseph-ball">
                            <FaLinkedin size={30} />
                        </Link>
                    </div>
                    <div className="bg-[#333333] text-gray-300 p-2 max-h-[40px] hover:scale-110 duration-500">
                        <Link href="https://github.com/matthewball337">
                            <FaGithub size={30} />
                        </Link>
                    </div>
                    <div className="bg-[#6fc2b0] text-gray-300 p-2 max-h-[40px] hover:scale-110 duration-500">
                        <Link href="mailto:matthewball337@gmail.com">
                            <HiOutlineMail size={30}/>
                        </Link>
                    </div>
                </div>
            </div>
            {/* menu */}
            <ul className='hidden lg:flex'>
                <li className="hover:text-pink-600">
                    <Scroll.Link to="home" smooth={true} duration={500}>
                        Home
                    </Scroll.Link>
                </li>
                <li className="hover:text-pink-600">
                    <Scroll.Link to="about" smooth={true} duration={500}>
                        About
                    </Scroll.Link>
                </li>
                <li className="hover:text-pink-600">
                    <Scroll.Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Scroll.Link>
                </li>
                <li className="hover:text-pink-600">
                    <Scroll.Link to="work" smooth={true} duration={500}>
                        Work
                    </Scroll.Link>
                </li>
                <li className="hover:text-pink-600">
                    <Scroll.Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Scroll.Link>
                </li>
                <li className="hover:text-pink-600">
                    <Link href="https://drive.google.com/file/d/18YsE02sYvhYdSw0g9dwxIFUbqUiQLXOD/view?usp=drive_link">
                        Resumé
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='lg:hidden z-10 -mt-1.5 hover:text-pink-600'>
                {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
            </div>
            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-blue-600 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl hover:text-pink-600'>
                    <Scroll.Link onClick={handleClick} to="home" 
                        smooth={true} duration={500}>
                        Home
                    </Scroll.Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600'>
                    <Scroll.Link onClick={handleClick} to="about"
                        smooth={true} duration={500}>
                        About
                    </Scroll.Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600'>
                    <Scroll.Link onClick={handleClick} to="skills"
                        smooth={true} duration={500}>
                        Skills
                    </Scroll.Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600'>
                    <Scroll.Link onClick={handleClick} to="work"
                        smooth={true} duration={500}>
                        Work
                    </Scroll.Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600'>
                    <Scroll.Link onClick={handleClick} to="contact"
                        smooth={true} duration={500}>
                        Contact
                    </Scroll.Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600'>
                    <Link href="https://drive.google.com/file/d/18YsE02sYvhYdSw0g9dwxIFUbqUiQLXOD/view?usp=drive_link">
                        Resumé
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar