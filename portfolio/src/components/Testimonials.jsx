import React, { forwardRef } from 'react'
import image from "../assets/image/Ellipse10.png"
import Testimonial from './Testimonial'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default forwardRef(function Testimonials(_,ref) {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };


  return (
    <section ref={ref} className='mb-20'>
        <p className='text-center text-4xl text-black dark:text-white font-bold mb-4'>Testimonials</p>
        <p className='text-center text-black dark:text-white mb-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur error assumenda hic mollitia esse cumque sunt incidunt illum, velit est temporibus quaerat enim eum ipsum, exercitationem voluptatum tempore, necessitatibus atque.</p>
        <Slider {...settings}>
            <Testimonial 
                image={image}
                content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nihil error facilis iure facere similique obcaecati earum laborum aliquid sequi enim eaque blanditiis, id cupiditate, fugiat reprehenderit, illum eveniet neque."}
                name={"Name"}
                position={"CEO"}
            />
            <Testimonial 
                image={image}
                content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nihil error facilis iure facere similique obcaecati earum laborum aliquid sequi enim eaque blanditiis, id cupiditate, fugiat reprehenderit, illum eveniet neque."}
                name={"Name"}
                position={"CEO"}
            />
            <Testimonial 
                image={image}
                content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nihil error facilis iure facere similique obcaecati earum laborum aliquid sequi enim eaque blanditiis, id cupiditate, fugiat reprehenderit, illum eveniet neque."}
                name={"Name"}
                position={"CEO"}
            />
        </Slider>
    </section>
  )
})
