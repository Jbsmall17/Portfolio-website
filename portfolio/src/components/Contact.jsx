import React from 'react'
import { MdOutlineMail } from "react-icons/md";


export default function Contact() {
  return (
    <section className='mb-10 md:mb-12 lg:mb-16 xl:mb-20'>
        <p className='text-center text-2xl lg:text-3xl xl:text-4xl text-black dark:text-white font-bold mb-4'>contact</p>
        <p className='text-center text-black dark:text-white font-light lg:font-normal text-sm lg:text-base mb-6 md:mb-8 lg:mb-12'>Get in Touch</p>
        <div className='flex justify-center'>
        <div className='flex flex-row py-4 lg:py-6 px-6 lg:px-8 bg-[#f8f8f8] rounded-lg max-w-[1000px] w-[90%]'>
            <div className='flex-1 hidden md:flex  justify-center items-center border-r lg:border-r-2 border-r-[#fd6d00]'>
                <MdOutlineMail className='text-9xl text-[#fd6d00]' />
            </div>
            <form className='flex-1 md:px-3 lg:px-6 md:py-2 pr-0'>
                <label className='block text-lg font-semibold mb-1'>Name:</label>
                <input className='w-full block mb-2 p-2 border hover:border-2 focus:border-2 outline-none border-[#fd6d00] rounded-lg' type='text' placeholder='your name' />
                <label className='block text-lg font-semibold mb-1'>Email:</label>
                <input className='w-full block mb-2 p-2 border hover:border-2 focus:border-2 outline-none border-[#fd6d00] rounded-lg' type='text' placeholder='your email' />
                <label className='block text-lg font-semibold mb-1'>Phone:</label>
                <input className='w-full block mb-2 p-2 border hover:border-2 focus:border-2 outline-none border-[#fd6d00] rounded-lg' type='text' placeholder='your phone number' />
                <label className='block text-lg font-semibold mb-1'>Message:</label>
                <textarea className='w-full p-2 resize-none h-[150px] border outline-none focus:border-2 hover:border-2 border-[#fd6d00] rounded-lg mb-4'>
                    leave a message....
                </textarea>
                <div className='flex justify-center'>
                    <button className='h-[40px] w-[105px] bg-[#fd6d00] text-white rounded-lg flex justify-center items-center hover:border hover:border-[#fd6d00] hover:bg-white hover:text-[#fd6d00] transition-all duration-500'>Submit</button>
                </div>
            </form>
        </div>
        </div>
    </section>
  )
}
