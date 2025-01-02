import React, { forwardRef } from 'react'
import Project from './Project'
import devlinks from "../assets/image/devlinks-preview.png"

export default forwardRef (function Projects(_,ref) {
  return (
    <section ref={ref} className='mb-10 md:mb-12 lg:mb-16 xl:mb-20'>
        <p className='text-center text-2xl lg:text-3xl xl:text-4xl text-black dark:text-white font-bold mb-4'>My Projects</p>
        <p className='text-center text-black dark:text-white font-light lg:font-normal text-sm lg:text-base mb-6 lg:mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo excepturi deserunt eligendi quae tempora dolores nisi aspernatur dicta velit et?</p>
        <ul className='flex flex-row flex-wrap justify-center items-center gap-4 mb-6 lg:mb-8 xl:mb-10'>
            <li className='cursor-pointer hover:bg-[#fd6d00] hover:text-white py-1 px-2 rounded-lg border border-[#969696] bg-[#f8f8f8]'>All</li>
            <li className='cursor-pointer hover:bg-[#fd6d00] hover:text-white py-1 px-2 rounded-lg border border-[#969696] bg-[#f8f8f8]'>Fullstack</li>
            <li className='cursor-pointer hover:bg-[#fd6d00] hover:text-white py-1 px-2 rounded-lg border border-[#969696] bg-[#f8f8f8]'>Frontend</li>
            <li className='cursor-pointer hover:bg-[#fd6d00] hover:text-white py-1 px-2 rounded-lg border border-[#969696] bg-[#f8f8f8]'>Backend</li>
        </ul>
        <div className='flex flex-row justify-center flex-wrap xl:flex-nowrap xl:justify-between gap-4'>
            <Project 
                image={devlinks}
                name={"Devlinks"}
                desc={"A web app for storing and sharing links with preview pages, enabling easy sharing with friends, family, or employers."}
                stack={["React.js","Typescript","TailwindCss"]}
                sourceCode={"https://github.com/Jbsmall17/link-sharing-webapp"}
                liveServer={"https://link-sharing-webapp.vercel.app/"}
            />
            <Project 
                image={devlinks}
                name={"Devlinks"}
                desc={"A web app for storing and sharing links with preview pages, enabling easy sharing with friends, family, or employers."}
                stack={["React.js","Typescript","TailwindCss"]}
            />
            <Project 
                image={devlinks}
                name={"Devlinks"}
                desc={"A web app for storing and sharing links with preview pages, enabling easy sharing with friends, family, or employers."}
                stack={["React.js","Typescript","TailwindCss"]}
            />
            <Project 
                image={devlinks}
                name={"Devlinks"}
                desc={"A web app for storing and sharing links with preview pages, enabling easy sharing with friends, family, or employers."}
                stack={["React.js","Typescript","TailwindCss"]}
            />      
        </div>
    </section>
  )
})
