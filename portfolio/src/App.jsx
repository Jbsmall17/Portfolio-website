import { useState } from 'react'
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

  return (
    <>
      <Header />
      <main className='px-[5%]'>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
      <Footer />
    </>
  )
}

export default App