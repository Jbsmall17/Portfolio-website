import React from 'react'
import protrait2 from "../assets/image/protrait2.png"
import { FaFacebook,FaXTwitter,FaInstagram,FaLinkedin } from "react-icons/fa6";
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className='mt-8 sm:mt-10 lg:mt-12 xl:mt-16 mb-6 md:mb-8 lg:mb-10 xl:mb-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16 xl:gap-20'>
        <motion.div
            initial={{x:"-115%", opacity: 0}} 
            transition={{duration: 0.75, type: "linear" }} 
            animate={{x:"0", opacity: 1}}
            className='flex-1 flex flex-col items-center md:items-start'>
            <p className='text-base text-center md:text-start lg:text-xl text-black dark:text-white font-semibold'>Hi I am <br /><span className='text-[#fd6f00]'>Alao Abdulmusawwir Ajibola</span></p>
            <p className='text-3xl lg:text-4xl xl:text-5xl text-black dark:text-white font-bold'>Fullstack</p>
            <p className='text-3xl lg:text-4xl xl:text-5xl text-black dark:text-white font-bold ml-0 md:ml-12 lg:ml-16 xl:ml-20 mb-4 lg:mb-4 xl:mb-6'>Developer</p>
            <p className='mb-4 text-sm lg:text-base text-center md:text-start font-light lg:font-normal text-black dark:text-white'>
                A skilled MERN stack developer with 3 years of experience crafting visually stunning websites and dynamic web applications that bring brand stories to life. 
                I excel at building robust, efficient servers to power the logic and functionality behind seamless operations
            </p>
            <a href='https://www.github.com/Jbsmall17' target="_blank">
            <button className='h-[32px] lg:h-[40px] w-[100px] lg:w-[105px] text-sm lg:text-base text-white bg-[#fd6f00] flex justify-center items-center rounded-sm hover:bg-white hover:text-[#fd6d00] hover:border hover:border-[#fd6d00] transition-all duration-500'>
                Hire Me
            </button>
            </a>
        </motion.div>
        <motion.div
            initial={{x:"115%", opacity: 0}} 
            transition={{delay: 0.75,duration: 0.75, type: "linear" }} 
            animate={{x:"0", opacity: 1}}
        >
            <div 
                className='w-[300px] lg:w-[400px] xl:w-[500px] h-[300px] lg:h-[400px] xl:h-[500px] rounded-full p-[4px] bg-gradient-to-b from-[#1A1A1A] to-[#fd6f00]'
            >
                <img className='w-full h-full z-20 rounded-full' src={protrait2} alt='protriat image' />
            </div>
            <div className='flex flex-row justify-center items-center gap-4 mt-4'>
                <FaFacebook className='text-xl lg:text-2xl hover:scale-110 text-black dark:text-white hover:text-[#fd6d00] transition-all duration-200' />
                <FaXTwitter className='text-xl lg:text-2xl hover:scale-110 text-black dark:text-white hover:text-[#fd6d00] transition-all duration-200' />
                <FaInstagram className='text-xl lg:text-2xl hover:scale-110 text-black dark:text-white hover:text-[#fd6d00] transition-all duration-200' />
                <FaLinkedin  className='text-xl lg:text-2xl hover:scale-110 text-black dark:text-white hover:text-[#fd6d00] transition-all duration-200' />
            </div>
        </motion.div>
    </section>
  )
}
