import React from 'react'
import { FaQuoteLeft,FaQuoteRight, FaRegUser } from "react-icons/fa";


export default function Testimonial({image,content,name,position,company}) {
  return (
    <div className='group py-6 px-4 rounded-lg bg-[#f8f8f8] hover:bg-[#fd6d00] shrink-0 max-w-[700px] xl:max-w-[800px] w-[90%] flex flex-col md:flex-row gap-4 items-center transition-all duration-500'>
      <div className='shrink-0 w-[75px] sm:w-[100px] md:w-[150px] lg:w-[200px] h-[75px] sm:h-[100px] md:h-[150px] lg:h-[200px]'>
        {
          image == ""
          ? <FaRegUser className='w-full h-full rounded-full' />
          : <img className='block w-full h-full rounded-full' src={image} alt="people pics" />
        }
      </div>
      <div className='text-center'>
        <p className='font-normal text-sm mb-4 group-hover:text-white'><FaQuoteLeft className='inline mr-1 -translate-y-4 text-[#fd6f00] group-hover:text-black' /> {content} <FaQuoteRight className='inline ml-1 translate-y-4 text-[#fd6f00] group-hover:text-black'/></p>
        <p className='font-semibold text-xl group-hover:text-white'>{name}</p>
        <p className='text-lg font-normal group-hover:text-white'>{position}, {company}</p>
      </div>
    </div>
  )
}
