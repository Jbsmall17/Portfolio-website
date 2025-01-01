import React from 'react'
import Logo from './Logo'
import { FaFacebook,FaXTwitter,FaInstagram,FaLinkedin } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer>
        <div className='bg-[#f8f8f8] dark:bg-[#1e1e1e] pt-4 md:pt-6 lg:pt-8 pb-4 lg:pb-6 flex flex-col gap-4 lg:gap-6 items-center'>
            <Logo />
            <ul className='flex flex-col md:flex-row gap-2 lg:gap-4 xl:gap-8 items-center'>
                <li className='hover:text-[#fd6d00] text-xs lg:text-base text-black dark:text-white cursor-pointer'>home</li>
                <li className='hover:text-[#fd6d00] text-xs lg:text-base text-black dark:text-white cursor-pointer'>About Me</li>
                <li className='hover:text-[#fd6d00] text-xs lg:text-base text-black dark:text-white cursor-pointer'>Services</li>
                <li className='hover:text-[#fd6d00] text-xs lg:text-base text-black dark:text-white cursor-pointer'>Projects</li>
                <li className='hover:text-[#fd6d00] text-xs lg:text-base text-black dark:text-white cursor-pointer'>Testimnonials</li>
                <li className='hover:text-[#fd6d00] text-xs lg:text-base text-black dark:text-white cursor-pointer'>Contact</li>
            </ul>
            <div className='flex flex-row justify-center items-center gap-4'>
                <FaFacebook className='text-xl lg:text-2xl text-black dark:text-white hover:scale-110 hover:text-[#fd6d00] transition-all duration-200' />
                <FaXTwitter className='text-xl lg:text-2xl text-black dark:text-white hover:scale-110 hover:text-[#fd6d00] transition-all duration-200' />
                <FaInstagram className='text-xl lg:text-2xl text-black dark:text-white hover:scale-110 hover:text-[#fd6d00] transition-all duration-200' />
                <FaLinkedin className='text-xl lg:text-2xl text-black dark:text-white hover:scale-110 hover:text-[#fd6d00] transition-all duration-200' />
            </div>
        </div>
        <div className='bg-[#545454] dark:bg-[#121212] flex justify-center py-2 text-white'>
            <p>&copyright; <span className='text-[#fd6d00] dark:text-white'>jibola</span> All Rights Reserved, inc.</p> 
        </div>
    </footer>
  )
}
