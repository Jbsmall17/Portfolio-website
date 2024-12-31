import React from 'react'
import { MdOutlineMail } from "react-icons/md";


export default function Contact() {
  return (
    <section className='mb-20'>
        <p className='text-center text-4xl font-bold mb-4'>contact</p>
        <p className='text-center mb-12'>Get in Touch</p>
        <div className='flex justify-center'>
        <div className='flex flex-row py-6 px-8 bg-[#f8f8f8] rounded-lg max-w-[1000px] w-[90%]'>
            <div className='flex-1 flex  justify-center items-center border-r-2 border-r-[#fd6d00]'>
                <MdOutlineMail className='text-9xl text-[#fd6d00]' />
            </div>
            <form className='flex-1 px-6 py-2 pr-0'>
                <label className='block text-lg font-semibold mb-1'>Name:</label>
                <input className='w-full block mb-2 p-2 border outline-none border-[#fd6d00] rounded-lg' type='text' placeholder='your name' />
                <label className='block text-lg font-semibold mb-1'>Email:</label>
                <input className='w-full block mb-2 p-2 border outline-none border-[#fd6d00] rounded-lg' type='text' placeholder='your email' />
                <label className='block text-lg font-semibold mb-1'>Phone:</label>
                <input className='w-full block mb-2 p-2 border outline-none border-[#fd6d00] rounded-lg' type='text' placeholder='your phone number' />
                <label className='block text-lg font-semibold mb-1'>Message:</label>
                <textarea className='w-full p-2 resize-none h-[150px] border border-[#fd6d00] rounded-lg mb-4'>
                    leave a message....
                </textarea>
                <div className='flex justify-center'>
                    <button className='h-[40px] bg-[#fd6d00] text-white rounded-lg px-6'>Submit</button>
                </div>
            </form>
        </div>
        </div>
    </section>
  )
}
