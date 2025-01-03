import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BiExit  } from "react-icons/bi";
import { motion } from 'motion/react';

export default function Project({image,name,desc,stack,sourceCode,liveServer}) {
  return (
    <motion.div 
      initial={{y:"15%",opacity:0}}
      transition={{delay: 0.3,type: "tween", ease:"easeIn" }} 
      whileInView={{y:"0",opacity:1}}
      viewport={{once:true}}
      className='max-w-[300px] xl:flex-1 w-full border border-[#ffebdb] rounded-lg'>
      <div className='text-center rounded-tl-lg rounded-tr-lg bg-[#ffebdb] flex justify-center'>
        <img className='block rounded-tl-lg rounded-tr-lg block h-full w-full' src={image} />
      </div>
      <div className='bg-[#f8f8f8] rounded-bl-lg rounded-br-lg px-4 pt-2 pb-2'>
        <p className='mb-2 text-xl font-semibold text-[#fd6f00]'>{name}</p>
        <p className='text-sm mb-2'>{desc}</p>
        <div className='mb-6 flex flex-row justify-center gap-1 flex-wrap'>
            {
                stack.map((tech,idx)=>{
                    return <div key={idx} className='bg-[#fd6f00] text-white text-sm py-1 px-2 rounded-full'>{tech}</div>
                })
            }
        </div>
        <div className='flex flex-row gap-6 items-center mb-4'>
            <a
                href={sourceCode}
                target='_blank'
                className="cursor-pointer group flex items-center text-blue-500 transition-colors duration-200"
            >
                <span className="text-sm group-hover:text-blue-700 transition-colors duration-200">
                    Source Code
                </span>
                <FaGithub className="ml-2 text-xl group-hover:text-blue-700 group-hover:scale-110 transition-all duration-200" />
            </a>
            <a
                href={liveServer}
                target='_blank'
                className="group flex items-center text-blue-500 transition-colors duration-200"
            >
                <span className="text-sm group-hover:text-blue-700 transition-colors duration-200">
                    Live Server
                </span>
                <BiExit className="ml-2 text-xl group-hover:text-blue-700 group-hover:scale-110 transition-all duration-200" />
            </a>
        </div>
      </div>
    </motion.div>
  )
}
