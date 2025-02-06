import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
// import FaTimes from 'react-icons/fa'
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src='./logo.png' alt="Logo Image" style={{width: '50px'}}/>
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
                <FaBars />
            </div>
            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : ''}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* Social icons */}
            <div className='hidden'></div>
        </div>
    )
}

export default Navbar