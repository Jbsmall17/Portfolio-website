import React from 'react'
import { FaLessThan,FaGreaterThan } from "react-icons/fa"
import { TbSlash } from "react-icons/tb";


export default function Logo() {
  return (
    <div 
      onClick={()=>{
        window.scrollTo({
          top:0,
          behavior: 'smooth'
        })
      }} 
      className='cursor-pointer flex flex-row items-center'
    >
        <p className='text-3xl md:text-4xl font-bold text-black dark:text-[#fd6d00]'>&lt;jibola&#47;&gt;</p>
    </div>
  )
}
