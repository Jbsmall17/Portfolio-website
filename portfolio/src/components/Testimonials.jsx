import React from 'react'
import image from "../assets/image/Ellipse10.png"
import Testimonial from './Testimonial'

export default function Testimonials() {
  return (
    <section className='mb-20'>
        <p className='text-center text-4xl text-black dark:text-white font-bold mb-4'>Testimonials</p>
        <p className='text-center text-black dark:text-white mb-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur error assumenda hic mollitia esse cumque sunt incidunt illum, velit est temporibus quaerat enim eum ipsum, exercitationem voluptatum tempore, necessitatibus atque.</p>
        <div className='flex flex-row justify-center gap-6 overflow-auto'>
            <Testimonial 
                image={image}
                content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nihil error facilis iure facere similique obcaecati earum laborum aliquid sequi enim eaque blanditiis, id cupiditate, fugiat reprehenderit, illum eveniet neque."}
                name={"Name"}
                position={"CEO"}
            />
            {/* <Testimonial 
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
            /> */}
        </div>
    </section>
  )
}
