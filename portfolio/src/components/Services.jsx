import React from 'react'
import { AiOutlineGlobal, AiOutlineShoppingCart } from "react-icons/ai";
import { MdWeb,MdSupport } from "react-icons/md";
import { FiServer } from "react-icons/fi"
import Service from './Service';


export default function Services() {
  return (
    <section>
        <p className='text-center text-4xl font-bold mb-4'>Services</p>
        <p className='text-center mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis itaque in alias cum repellat laboriosam doloribus esse quis amet animi.</p>
        <div className='flex flex-row gap-4'>
            <Service 
                icon={<AiOutlineGlobal className='text-4xl text-[#fd6f00]' />}
                name={"Website"}
                desc={"Building responsive, SEO-friendly, and dynamic websites tailored to client needs using React for the frontend and Express.js/Node.js for backend functionality."}
            />
            <Service 
                icon={<MdWeb className='text-4xl text-[#fd6f00]' />}
                name={"Web Application"}
                desc={"Creating scalable, interactive, and feature-rich web applications using React.js for the UI, Node.js/Express for backend logic, and MongoDB for data storage."}
            />
            <Service 
                icon={<FiServer className='text-4xl text-[#fd6f00]' />}
                name={"RESTful API"}
                desc={"Designing and implementing secure and efficient REST APIs for communication between the frontend and backend, enabling third-party integrations."}
            />
            <Service 
                icon={<AiOutlineShoppingCart className='text-4xl text-[#fd6f00]' />}
                name={"E-Commerce Solutions"}
                desc={"Developing e-commerce platforms with features like shopping carts, payment integration, and product management systems."}
            />
            <Service 
                icon={<MdSupport className='text-4xl text-[#fd6f00]' />}
                name={"Maintenance and Support"}
                desc={"Providing ongoing support, bug fixes, and updates for applications to ensure seamless performance."}
            />
        </div>
    </section>
  )
}
