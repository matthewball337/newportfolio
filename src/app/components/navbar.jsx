import React from 'react'
import {FaBars} from 'react-icons/fa'
// import FaTimes from 'react-icons/fa'
const Navbar = () => {
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#3078e4] text-gray-300">
            <div>
                <img src='./logo.png' alt="Logo Image" style={{width: '50px'}}/>
            </div>

            {/* menu */}
            <div>
                <ul className='flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Hamburger */}
            <div className='hidden'>
                <FaBars />
            </div>
            {/* Mobile menu */}
            <ul className='hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

            {/* Social icons */}
            <div className='hidden'></div>
        </div>
    )
}

export default Navbar