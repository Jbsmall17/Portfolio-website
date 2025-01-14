import React, { forwardRef } from 'react'
import protrait1 from "../assets/image/protrait1.png"
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles';
import { motion } from 'motion/react';

const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const SkillSlider = styled(Slider)(({ theme }) => ({
    color: '#fd6f00',
    height: 5,
    padding: '15px 0',

    '& .MuiSlider-thumb': {
      height: 20,
      width: 20,
      border: '2px solid #fd6f00',
      backgroundColor: '#fff',
      boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.1)',
      '&:focus, &:hover, &.Mui-active': {
        boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.1)',
        '@media (hover: none)': {
          boxShadow: iOSBoxShadow,
        },
      },
      '&:before': {
        boxShadow:
          '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)',
      },
    },
    '&.Mui-disabled':{
      color: '#fd6f00',
      padding: '12px 0',
      [theme.breakpoints.up('md')]: {
        padding: '8px 0',
      },
    },
    '& .MuiSlider-valueLabel': {
      fontSize: 12,
      fontWeight: 'normal',
      top: -6,
      backgroundColor: 'unset',
      color: theme.palette.text.primary,
      '&::before': {
        display: 'none',
      },
      '& *': {
        background: 'transparent',
        color: '#000',
        ...theme.applyStyles('dark', {
          color: '#fff',
        }),
      },
    },
    '& .MuiSlider-track': {
      border: 'none',
      height: 5,
    },
    '& .MuiSlider-rail': {
      opacity: 0.5,
      boxShadow: 'inset 0px 0px 4px -2px #000',
      backgroundColor: '#edecec',
    },
    ...theme.applyStyles('dark', {
      color: '#0a84ff',
    }),
  }));


export default forwardRef (function About(_,ref) {
  return (
    <section ref={ref} className='mb-10 md:mb-12 lg:mb-16 xl:mb-20 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12 lg:gap-16 xl:gap-20'>
        <div>
          <motion.div
            initial={{x:"-100%",opacity:0}}
            transition={{delay: 0.3,duration: 0.5, type: "linear" }} 
            whileInView={{x:"0",opacity:1}}
            viewport={{once:true}}
            className='w-[300px] lg:w-[400px] xl:w-[500px] h-[300px] lg:h-[400px] xl:h-[500px] rounded-full p-[4px] bg-gradient-to-b from-[#1A1A1A] to-[#fd6f00]'
          >
            <img className='w-full h-full rounded-full' src={protrait1} alt='protriat image' />
          </motion.div>
        </div>
        <motion.div 
          initial={{x:"100%",opacity:0}}
          transition={{delay: 0.8,duration: 0.5, type: "linear" }} 
          whileInView={{x:"0",opacity:1}}
          viewport={{once:true}}
          className='flex-1'>
            <p className='text-2xl lg:text-3xl xl:text-4xl text-center md:text-start text-black dark:text-white font-semibold mb-4'>About Me</p>
            <p className='mb-2 text-sm lg:text-base text-center md:text-start font-light lg:font-normal text-black dark:text-white '>
              I'm a web developer skilled in HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express, and Git, creating responsive designs and efficient backend systems for impactful digital experiences.
            </p>
            <div className='grid grid-cols-2 gap-x-4 lg:gap-x-6 xl:gap-x-8'>
                <div>
                  <p className='text-base lg:text-xl text-black dark:text-white font-semibold'>HTML</p>
                  <SkillSlider disabled defaultValue={95} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-base lg:text-xl text-black dark:text-white font-semibold'>CSS</p>
                    <SkillSlider disabled defaultValue={85} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-base lg:text-xl text-black dark:text-white font-semibold'>Javascript</p>
                    <SkillSlider disabled defaultValue={85} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-base lg:text-xl text-black dark:text-white font-semibold'>Typescript</p>
                    <SkillSlider disabled defaultValue={75} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-base lg:text-xl text-black dark:text-white font-semibold'>React.js</p>
                    <SkillSlider disabled defaultValue={90} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-base lg:text-xl text-black dark:text-white font-semibold'>Next.js</p>
                    <SkillSlider disabled defaultValue={85} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-base lg:text-xl text-black dark:text-white font-semibold'>TailwindCss</p>
                    <SkillSlider disabled defaultValue={90} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-base lg:text-xl text-black dark:text-white font-semibold'>Node.js</p>
                    <SkillSlider disabled defaultValue={80} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-base lg:text-xl text-black dark:text-white font-semibold'>Express.js</p>
                    <SkillSlider disabled defaultValue={80} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-base lg:text-xl font-semibold'>MongoDB</p>
                    <SkillSlider disabled defaultValue={80} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-base lg:text-xl text-black dark:text-white font-semibold'>GIT</p>
                    <SkillSlider disabled defaultValue={80} aria-label="Default" valueLabelDisplay="auto" />
                </div>
            </div>
        </motion.div>
    </section>
  )
})
