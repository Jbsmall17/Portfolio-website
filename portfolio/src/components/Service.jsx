import React from 'react'
import { motion } from 'motion/react';
export default function Service({icon,name,desc}) {
  return (
    <motion.div 
      initial={{y:"15%",opacity:0}}
      transition={{delay: 0.3,type: "tween", ease:"easeIn" }} 
      whileInView={{y:"0",opacity:1}}
      viewport={{once:true}}
      className='group max-w-[300px] xl:flex-1 w-full bg-[#f8f8f8] hover:bg-[#fd6d00] px-4 py-6 rounded-lg transition-all duration-500'>
        {icon}
        <p className='text-lg font-semibold my-2 group-hover:text-white'>{name}</p>
        <p className='text-sm group-hover:text-white'>{desc}</p>
    </motion.div>
  )
}
