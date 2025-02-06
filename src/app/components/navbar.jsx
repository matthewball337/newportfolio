import React from 'react'
// import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#3078e4] text-gray-300">
            <div>
                <img className="relative w-auto h-[60px] place-self-center" src='./logo.png' alt="Logo Image" />
            </div>
        </div>
    )
}

export default Navbar