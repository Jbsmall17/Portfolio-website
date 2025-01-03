import React, { forwardRef, useState } from 'react'
import Project from './Project'
import { data } from '../data/data'


export default forwardRef (function Projects(_,ref) {
    const [projects, setProjects] = useState(data)
    console.log( projects)
  return (
    <section ref={ref} className='mb-10 md:mb-12 lg:mb-16 xl:mb-20'>
        <p className='text-center text-2xl lg:text-3xl xl:text-4xl text-black dark:text-white font-bold mb-4'>My Projects</p>
        <p className='text-center text-black dark:text-white font-light lg:font-normal text-sm lg:text-base mb-6 lg:mb-8'>
            My projects span frontend, backend, and full-stack development, delivering end-to-end solutions.
        </p>
        <ul className='flex flex-row flex-wrap justify-center items-center gap-4 mb-6 lg:mb-8 xl:mb-10'>
            <li className='cursor-pointer hover:bg-[#fd6d00] hover:text-white py-1 px-2 rounded-lg border border-[#969696] bg-[#f8f8f8]'>All</li>
            <li className='cursor-pointer hover:bg-[#fd6d00] hover:text-white py-1 px-2 rounded-lg border border-[#969696] bg-[#f8f8f8]'>Fullstack</li>
            <li className='cursor-pointer hover:bg-[#fd6d00] hover:text-white py-1 px-2 rounded-lg border border-[#969696] bg-[#f8f8f8]'>Frontend</li>
            <li className='cursor-pointer hover:bg-[#fd6d00] hover:text-white py-1 px-2 rounded-lg border border-[#969696] bg-[#f8f8f8]'>Backend</li>
        </ul>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-4'>
            {
                projects.map(({name,desc,stack,imagePreview,sourceCode,liveServer},index)=>{
                    return (
                        <Project
                            key={index} 
                            image={imagePreview}
                            name={name}
                            desc={desc}
                            stack={stack}
                            sourceCode={sourceCode}
                            liveServer={liveServer}
                        />
                    )
                })
            }
        </div>
    </section>
  )
})
