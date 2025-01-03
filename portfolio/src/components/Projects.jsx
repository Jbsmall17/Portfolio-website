import React, { forwardRef } from 'react'
import Project from './Project'
import devlinks from "../assets/image/devlinks-preview.png"
import dimplattech from "../assets/image/dimplattech-preview.png"
import bloggingAPi from "../assets/image/bloggin-api-preview.png"
import desserts from "../assets/image/desserts-ecommerce-preview.png" 
import partypal from "../assets/image/partypal-preview.png"
import thankyoucard from "../assets/image/thank-you-card-preview.png"
import the4thent from "../assets/image/the4thent-preview.png"

export default forwardRef (function Projects(_,ref) {
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
        <div className='flex flex-row justify-center xl:justify-between flex-wrap gap-4'>
            <Project 
                image={devlinks}
                name={"Devlinks"}
                desc={"A web app for storing and sharing links with preview pages, enabling easy sharing with friends, family, or employers."}
                stack={["React.js","Typescript","TailwindCss"]}
                sourceCode={"https://github.com/Jbsmall17/link-sharing-webapp"}
                liveServer={"https://link-sharing-webapp.vercel.app/"}
            />
            <Project 
                image={dimplattech}
                name={"dimplattech's website"}
                desc={"the official website of Dimplattech"}
                stack={["Next.js","Typescript","TailwindCss"]}
                sourceCode={"https://github.com/Jbsmall17/dimplattech"}
                liveServer={"https://dimplattech.vercel.app/"}
            />
            <Project 
                image={partypal}
                name={"Partypal"}
                desc={"Partypal is a comprehensive event planning platform that simplifies the process of connecting event planners with vendor"}
                stack={["React.js","Typescript","TailwindCss"]}
                sourceCode={"https://github.com/midrohuborg/PartyPal"}
                liveServer={"https://www.partypalnow.com/"}
            />
            <Project 
                image={bloggingAPi}
                name={"A bloging API"}
                desc={"This is a CRUD RESTful API that allows users to read blogs. Only authenticated users can create, update, and delete blogs."}
                stack={["Express.js","Javascript","MongoDB"]}
                sourceCode={"https://github.com/Jbsmall17/Blogging_API"}
                liveServer={"https://blog-api-ljcf.onrender.com/"}
            />
            <Project 
                image={the4thent}
                name={"4thent's website"}
                desc={"Official website of 4th entertainment"}
                stack={["React.js","Javascript","CSS"]}
                sourceCode={"https://github.com/Jbsmall17/The4thEntWebsite"}
                liveServer={"https://www.the4thent.com"}
            />      
        </div>
    </section>
  )
})
