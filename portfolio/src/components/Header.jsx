import React from 'react'
import Logo from './Logo';


export default function Header() {
  return (
    <header className='flex justify-between items-center mb-16 p-[5%] pt-8'>
      <Logo />
      <nav>
        <ul className='flex flex-row gap-8 items-center'>
            <li className='hover:text-[#fd6d00] cursor-pointer'>Home</li>
            <li className='hover:text-[#fd6d00] cursor-pointer'>About Me</li>
            <li className='hover:text-[#fd6d00] cursor-pointer'>Services</li>
            <li className='hover:text-[#fd6d00] cursor-pointer'>Projects</li>
            <li className='hover:text-[#fd6d00] cursor-pointer'>Testimonials</li>
            <li className='hover:text-[#fd6d00] cursor-pointer'>contact</li>
            <button className='h-[40px] w-[140px] flex justify-center items-center text-white rounded-lg bg-[#fd6f00] hover:bg-white hover:text-[#fd6d00] hover:border hover:border-[#fd6d00] transition-all duration-500'>Download CV</button>
        </ul>
      </nav>
    </header>
  )
}
