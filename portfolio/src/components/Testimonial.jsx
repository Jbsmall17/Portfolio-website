import React from 'react'
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

export default function Testimonial({image,content,name,position}) {
  return (
    <div className='py-6 px-4 rounded-lg bg-[#f8f8f8] shrink-0 max-w-[800px] w-[90%] flex flex-row gap-4 items-center'>
      <div className='shrink-0 w-[200px] h-[200px]'>
        <img className='block w-full h-full' src={image} alt="people pics" />
      </div>
      <div>
        <p className='font-normal text-sm mb-4'><FaQuoteLeft className='inline mr-1 -translate-y-4 text-[#fd6f00]' /> {content} <FaQuoteRight className='inline ml-1 translate-y-4 text-[#fd6f00]'/></p>
        <p className='font-semibold text-xl'>{name}</p>
        <p className='text-lg font-normal'>{position}</p>
      </div>
    </div>
  )
}
