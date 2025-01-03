import React, { forwardRef } from 'react'
import image from "../assets/image/Ellipse10.png"
import Testimonial from './Testimonial'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonials } from '../data/data';

export default forwardRef(function Testimonials(_,ref) {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };


  return (
    <section ref={ref} className='mb-20'>
        <p className='text-center text-4xl text-black dark:text-white font-bold mb-4'>Testimonials</p>
        <p className='text-center text-black dark:text-white mb-12'>
            Here are testimonials from professionals I’ve collaborated with in the tech space during my years of practice.
        </p>
        <Slider {...settings}>
            {
                testimonials.map(({name,companyName,position,picture,testimonial},idx)=>{
                    return (
                        <Testimonial
                            key={idx}
                            image={picture}
                            content={testimonial}
                            name={name}
                            position={position}
                            company={companyName}
                        />
                    )
                })
            }
        </Slider>
    </section>
  )
})
