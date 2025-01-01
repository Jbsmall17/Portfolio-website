import React, { useState } from 'react'
import Logo from './Logo';
import { FaBars } from "react-icons/fa"
import { IoClose } from "react-icons/io5";
export default function Header() {
    const [isActive,setIsActive] = useState(false)
    const [firstRender, setFirstRenderer] = useState(true)

    const openNavbar = () =>{
        setIsActive(true)
        setFirstRenderer(false)
    }

    const closeNavbar = () =>{
        setIsActive(false)
    }

    return (
    <header className='relative flex justify-between items-center  mb-8 sm:mb-10 lg:mb-12 xl:mb-16 px-[5%] pt-4 sm:pt-6 lg:pt-8'>
      <Logo />
      <nav className='hidden md:block'>
        <ul className='flex flex-row gap-2 lg:gap-4 xl:gap-8 items-center'>
            <li className='hover:text-[#fd6d00] text-xs  lg:text-base text-black dark:text-white cursor-pointer'>Home</li>
            <li className='hover:text-[#fd6d00] text-xs lg:text-base text-black dark:text-white cursor-pointer'>About Me</li>
            <li className='hover:text-[#fd6d00] text-xs lg:text-base text-black dark:text-white cursor-pointer'>Services</li>
            <li className='hover:text-[#fd6d00] text-xs lg:text-base text-black dark:text-white cursor-pointer'>Projects</li>
            <li className='hover:text-[#fd6d00] text-xs lg:text-base text-black dark:text-white cursor-pointer'>Testimonials</li>
            <li className='hover:text-[#fd6d00] text-xs lg:text-base text-black dark:text-white cursor-pointer'>contact</li>
            <button className='h-[32px] lg:h-[40px] w-[120px] lg:w-[140px] text-xs lg:text-base flex justify-center items-center text-white rounded-lg bg-[#fd6f00] hover:bg-white hover:text-[#fd6d00] hover:border hover:border-[#fd6d00] transition-all duration-500'>Download CV</button>
        </ul>
      </nav>
      <FaBars onClick={openNavbar} className='block md:hidden text-3xl text-black dark:text-[#fd6d00]' />
      <ul className={`${!isActive && firstRender ? "-translate-y-[100%]" : isActive && !firstRender ? "active" :"inactive"} pt-12 px-4 w-full bg-[#fd6d00] flex flex-col md:hidden absolute top-0 left-0`}>
            <IoClose onClick={closeNavbar} className='absolute top-4 right-4 text-4xl text-white' />
            <li className='text-center text-white py-2 border-b border-b-white'>Home</li>
            <li className='text-center text-white py-2 border-b border-b-white'>About Me</li>
            <li className='text-center text-white py-2 border-b border-b-white'>Services</li>
            <li className='text-center text-white py-2 border-b border-b-white'>Projects</li>
            <li className='text-center text-white py-2 border-b border-b-white'>Testimonials</li>
            <li className='text-center text-white py-2 border-b border-b-white'>Contact</li>
            <div className='my-4 flex justify-center'>
                <button className='w-[60%] py-2 rounded-lg text-[#fd6d00] bg-white'>Download CV</button>
            </div>
      </ul>
    </header>
  )
}
