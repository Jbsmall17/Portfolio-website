import React from 'react'
import circularBorder from "../assets/image/Ellipse4.png"
import protrait1 from "../assets/image/protrait1.png"
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles';


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
        padding: '12px 0'
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


export default function About() {
  return (
    <section className='mb-20 flex flex-row items-center gap-20'>
        <div className='w-[500px] h-[500px] rounded-full p-[4px] bg-gradient-to-b from-[#1A1A1A] to-[#fd6f00]'>
          <img className='w-full h-full rounded-full' src={protrait1} alt='protriat image' />
        </div>
        <div className='flex-1'>
            <p className='text-4xl font-semibold mb-4'>About Me</p>
            <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veniam dolorum officia animi non qui natus eligendi magni earum nisi quisquam minus expedita id, deserunt voluptates officiis harum sequi nobis?</p>
            <div className='grid grid-cols-2 gap-x-8'>
                <div>
                    <p className='text-xl font-semibold'>Javascript</p>
                    <SkillSlider disabled defaultValue={70} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-xl font-semibold'>Typescript</p>
                    <SkillSlider disabled defaultValue={70} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-xl font-semibold'>React.js</p>
                    <SkillSlider disabled defaultValue={70} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-xl font-semibold'>Next.js</p>
                    <SkillSlider disabled defaultValue={70} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-xl font-semibold'>TailwindCss</p>
                    <SkillSlider disabled defaultValue={70} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-xl font-semibold'>Node.js</p>
                    <SkillSlider disabled defaultValue={70} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-xl font-semibold'>Express.js</p>
                    <SkillSlider disabled defaultValue={70} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-xl font-semibold'>MongoDB</p>
                    <SkillSlider disabled defaultValue={70} aria-label="Default" valueLabelDisplay="auto" />
                </div>
                <div>
                    <p className='text-xl font-semibold'>GIT</p>
                    <SkillSlider disabled defaultValue={70} aria-label="Default" valueLabelDisplay="auto" />
                </div>
            </div>
        </div>
    </section>
  )
}
