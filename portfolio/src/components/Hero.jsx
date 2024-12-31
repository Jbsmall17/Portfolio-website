import React from 'react'
import circularBorder from "../assets/image/Ellipse4.png"
import protrait2 from "../assets/image/protrait2.png"
import { FaFacebook,FaXTwitter,FaInstagram,FaLinkedin } from "react-icons/fa6";


export default function Hero() {
  return (
    <section className='mb-12 flex flex-row items-center justify-between gap-20'>
        <div className='flex-1'>
            <p className='text-xl font-semibold'>Hi I am <br /><span className='text-[#fd6f00]'>Alao Abdulmusawwir Ajibola</span></p>
            <p className='text-5xl font-bold'>Fullstack</p>
            <p className='text-5xl font-bold ml-20 mb-8'>Developer</p>
            <p className='mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae est aspernatur exercitationem saepe voluptatibus quia deserunt, necessitatibus vel, reprehenderit eum itaque dicta, a veritatis quis ea debitis alias. Quibusdam, adipisci!</p>
            <button className='h-[40px] w-[105px] text-white bg-[#fd6f00] flex justify-center items-center rounded-sm hover:bg-white hover:text-[#fd6d00] hover:border hover:border-[#fd6d00] transition-all duration-500'>
                Hire Me
            </button>
        </div>
        <div>
            <div className='w-[500px] h-[500px] rounded-full p-[4px] bg-gradient-to-b from-[#1A1A1A] to-[#fd6f00]'>
                {/* <img className='w-full absolute bottom-0 left-0 z-10 ' src={circularBorder} alt="circular border"/> */}
                <img className='w-full h-full z-20 rounded-full' src={protrait2} alt='protriat image' />
            </div>
            <div className='flex flex-row justify-center items-center gap-4 mt-4'>
                <FaFacebook className='text-2xl' />
                <FaXTwitter className='text-2xl' />
                <FaInstagram className='text-2xl' />
                <FaLinkedin  className='text-2xl' />
            </div>
        </div>
    </section>
  )
}
