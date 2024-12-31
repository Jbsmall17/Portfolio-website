import React from 'react'
import Logo from './Logo'
import { FaFacebook,FaXTwitter,FaInstagram,FaLinkedin } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer>
        <div className='bg-[#f8f8f8] pt-8 pb-6 flex flex-col gap-6 items-center'>
            <Logo />
            <ul className='flex flex-row gap-4'>
                <li>home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Testimnonials</li>
                <li>Contact</li>
            </ul>
            <div className='flex flex-row justify-center items-center gap-4'>
                <FaFacebook className='text-2xl' />
                <FaXTwitter className='text-2xl' />
                <FaInstagram className='text-2xl' />
                <FaLinkedin className='text-2xl' />
            </div>
        </div>
        <div className='bg-[#545454] flex justify-center py-2 text-white'>
            <p>&copyright; <span className='text-[#fd6d00]'>jibola</span> All Rights Reserved, inc.</p> 
        </div>
    </footer>
  )
}
