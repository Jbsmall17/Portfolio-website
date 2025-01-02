import React, { forwardRef, useEffect, useState } from 'react'
import Logo from './Logo';
import { FaBars } from "react-icons/fa"
import { IoClose } from "react-icons/io5";
export default forwardRef (function Header({aboutMeRef,serviceRef,projectRef,testimonialRef,contactRef},headerRef) {
    const [isActive,setIsActive] = useState(false)
    const [firstRender, setFirstRenderer] = useState(true)
    const openNavbar = () =>{
        setIsActive(true)
        setFirstRenderer(false)        
    }

    const closeNavbar = () =>{
        setIsActive(false)
        setFirstRenderer(false)
    }

    const scrollToSection = (section) => {
        if(section.current){
            section.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }

    const downloadPdf = () =>{
        const link = document.createElement("a")
        link.href = "/Abdulmusawir Alao_ Junior Full-Stack Developer_Resume.pdf"
        link.download = "Abdulmusawir Alao_ Junior Full-Stack Developer_Resume.pdf"
        link.click()
    }

    useEffect(()=>{
        const scrollDistance = () =>{
            // console.log(window.scrollY)
            if(headerRef.current){
                if(window.scrollY > 50){
                    headerRef.current.classList.add("fixed")
                }else{
                    headerRef.current.classList.remove("fixed")
                }
            }
        }
        window.addEventListener("scroll",scrollDistance)
        return () =>{
            window.removeEventListener("scroll", scrollDistance)
        }
    },[])

    useEffect(()=>{
        console.log(window.innerWidth)
        const resizeHandler = ()=>{
            if(window.innerWidth < 768)
            setFirstRenderer(true)
        }
        window.addEventListener("resize",resizeHandler)
        return () => {
            window.removeEventListener("resize",resizeHandler)
        }
    })
    return (
    <header ref={headerRef} className={`z-10 w-full flex justify-between items-center px-[4%] py-2 top-0 left-0 sm:py-4 lg:py-6`}>
      <Logo  />
      <nav className='hidden md:block'>
        <ul className='flex flex-row gap-2 lg:gap-4 xl:gap-8 items-center'>
            <li onClick={()=>{
                window.scrollTo({
                    top:0,
                    behavior: 'smooth'
                })
            }} className='hover:text-[#fd6d00] text-xs  lg:text-base text-black dark:text-white cursor-pointer'>Home</li>
            <li onClick={()=>scrollToSection(aboutMeRef)} className='hover:text-[#fd6d00] text-xs lg:text-base text-black dark:text-white cursor-pointer'>About Me</li>
            <li onClick={()=>scrollToSection(serviceRef)} className='hover:text-[#fd6d00] text-xs lg:text-base text-black dark:text-white cursor-pointer'>Services</li>
            <li onClick={()=>scrollToSection(projectRef)} className='hover:text-[#fd6d00] text-xs lg:text-base text-black dark:text-white cursor-pointer'>Projects</li>
            <li onClick={()=>scrollToSection(testimonialRef)} className='hover:text-[#fd6d00] text-xs lg:text-base text-black dark:text-white cursor-pointer'>Testimonials</li>
            <li onClick={()=>scrollToSection(contactRef)} className='hover:text-[#fd6d00] text-xs lg:text-base text-black dark:text-white cursor-pointer'>contact</li>
            <button onClick={downloadPdf} className='h-[32px] lg:h-[40px] w-[120px] lg:w-[140px] text-xs lg:text-base flex justify-center items-center text-white rounded-lg bg-[#fd6f00] hover:bg-white hover:text-[#fd6d00] hover:border hover:border-[#fd6d00] transition-all duration-500'>Download CV</button>
        </ul>
      </nav>
      <FaBars onClick={openNavbar} className='block md:hidden text-3xl text-black dark:text-[#fd6d00]' />
      <ul className={`${!isActive && firstRender ? "-translate-y-[100%]" : isActive && !firstRender ? "active": "inactive"} pt-12 px-4 w-full bg-[#fd6d00] flex flex-col md:hidden absolute top-0 left-0`}>
            <IoClose onClick={closeNavbar} className='absolute top-4 right-4 text-4xl text-white' />
            <li onClick={()=>{
                window.scrollTo({
                    top:0,
                    behavior: 'smooth'
                });
                closeNavbar()}} className='text-center text-white py-2 border-b border-b-white'>Home</li>
            <li onClick={()=>{scrollToSection(aboutMeRef);closeNavbar()}} className='text-center text-white py-2 border-b border-b-white'>About Me</li>
            <li onClick={()=>{scrollToSection(serviceRef);closeNavbar()}} className='text-center text-white py-2 border-b border-b-white'>Services</li>
            <li onClick={()=>{scrollToSection(projectRef);closeNavbar()}} className='text-center text-white py-2 border-b border-b-white'>Projects</li>
            <li onClick={()=>{scrollToSection(testimonialRef);closeNavbar()}} className='text-center text-white py-2 border-b border-b-white'>Testimonials</li>
            <li onClick={()=>{scrollToSection(contactRef);closeNavbar()}} className='text-center text-white py-2 border-b border-b-white'>Contact</li>
            <div className='my-4 flex justify-center'>
                <button onClick={downloadPdf} className='w-[60%] py-2 rounded-lg text-[#fd6d00] bg-white'>Download CV</button>
            </div>
      </ul>
    </header>
  )
})
