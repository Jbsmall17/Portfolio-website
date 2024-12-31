import React from 'react'
import Project from './Project'
import devlinks from "../assets/image/devlinks-preview.png"

export default function Projects() {
  return (
    <section className='mb-20'>
        <p className='text-center text-4xl font-bold mb-4'>My Projects</p>
        <p className='text-center mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo excepturi deserunt eligendi quae tempora dolores nisi aspernatur dicta velit et?</p>
        <ul className='flex flex-row justify-center items-center gap-4 mb-10'>
            <li className='py-1 px-2 rounded-lg border border-[#969696] bg-[#f8f8f8]'>All</li>
            <li className='py-1 px-2 rounded-lg border border-[#969696] bg-[#f8f8f8]'>Fullstack</li>
            <li className='py-1 px-2 rounded-lg border border-[#969696] bg-[#f8f8f8]'>Frontend</li>
            <li className='py-1 px-2 rounded-lg border border-[#969696] bg-[#f8f8f8]'>Backend</li>
        </ul>
        <div className='flex flex-row justify-between flex-wrap'>
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
}
