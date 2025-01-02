import React, { useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const headerRef= useRef(null)
  const aboutMeRef = useRef(null)
  const serviceRef = useRef(null)
  const projectRef = useRef(null)
  const testimonialRef = useRef(null)
  const contactRef = useRef(null)
  return (
    <div className="bg-white dark:bg-[#1e1e1e]">
      <Header ref={headerRef} aboutMeRef={aboutMeRef} serviceRef={serviceRef} projectRef={projectRef} testimonialRef={testimonialRef} contactRef={contactRef} />
      <main className='px-[4%]'>
      <Hero />
      <About ref={aboutMeRef} />
      <Services ref={serviceRef} />
      <Projects ref={projectRef} />
      <Testimonials ref={testimonialRef} />
      <Contact ref={contactRef} />
    </main>
      <Footer aboutMeRef={aboutMeRef} serviceRef={serviceRef} projectRef={projectRef} testimonialRef={testimonialRef} contactRef={contactRef} />
    </div>
  )
}

export default App
