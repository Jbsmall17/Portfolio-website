import React, { forwardRef, useState } from 'react'
import { MdOutlineMail } from "react-icons/md";
import axios from "axios"

// https://formspree.io/f/xkggpndo
export default forwardRef(function Contact(_,ref) {
    const [formObj,setFormObj] = useState({
        name: "",
        email: "",
        phonenumber: "",
        message: ""
    })
    const [isLoading,setIsLoading] = useState(false)
    const [isMessageSent,setIsMessageSent] = useState(false)
    const [firstRender, setFirstRender] = useState(true)

    const {name,email,phonenumber,message} = formObj
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const handleChange = (e) =>{
        const {value,name} = e.target
        if(name === "phonenumber"){
            setFormObj({
                ...formObj,
                [name]: value.replace(/[a-zA-z]/g,"")
            })
        }else{
            setFormObj({
                ...formObj,
                [name]: value
            })
        }
    } 

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setFirstRender(false)
        if(emailRegex.test(email) && phonenumber.length === 11 && message != "" && name != ""){
            try{
                setIsLoading(true)
                const response = await axios.post("https://formspree.io/f/xkggpndo",formObj)
                setIsLoading(false)
                if(response.status == 200){
                    setIsMessageSent(true)
                }
            }catch(err){
                setIsMessageSent(false)
                setIsLoading(false)
            }
        }
    }

  return (
    <section ref={ref} className='mb-10 md:mb-12 lg:mb-16 xl:mb-20'>
        <p className='text-center text-2xl lg:text-3xl xl:text-4xl text-black dark:text-white font-bold mb-4'>contact</p>
        <p className='text-center text-black dark:text-white font-light lg:font-normal text-sm lg:text-base mb-6 md:mb-8 lg:mb-12'>Get in Touch</p>
        <div className='flex justify-center'>
        <div className='min-h-[450px] flex flex-row py-4 lg:py-6 px-6 lg:px-8 bg-[#f8f8f8] rounded-lg max-w-[1000px] w-[90%]'>
            <div className='flex-1 hidden md:flex  justify-center items-center border-r lg:border-r-2 border-r-[#fd6d00]'>
                <MdOutlineMail className='text-9xl text-[#fd6d00]' />
            </div>
            {
                !isMessageSent
                ?
            <form onSubmit={handleSubmit} className='flex-1 md:px-3 lg:px-6 md:py-2 pr-0'>
                <label htmlFor="name" className='block text-lg font-semibold mb-1'>
                    Name:
                </label>
                <input 
                    className={`w-full block mb-2 p-2 border hover:border-2 focus:border-2 outline-none border-[#fd6d00] rounded-lg`} 
                    type='text' 
                    placeholder='your name' 
                    id="name" 
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
                {name == "" && !firstRender && <p className='text-red-500 text-sm'>name is required</p>}
                <label htmlFor="email" className='block text-lg font-semibold mb-1'>
                    Email:
                </label>
                <input 
                    className='w-full block mb-2 p-2 border hover:border-2 focus:border-2 outline-none border-[#fd6d00] rounded-lg' 
                    placeholder='your email' 
                    id="email"
                    type="email" 
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                {!(emailRegex.test(email)) && !firstRender && <p className='text-red-500 text-sm'>email is required</p>}
                <label htmlFor="phonenumber" className='block text-lg font-semibold mb-1'>
                    Phone:
                </label>
                <input 
                    className='w-full block mb-2 p-2 border hover:border-2 focus:border-2 outline-none border-[#fd6d00] rounded-lg' 
                    type='text' 
                    placeholder='your phone number' 
                    id="phonenumber"
                    name='phonenumber'
                    value={phonenumber}
                    onChange={handleChange}
                    maxLength={11}
                />
                {phonenumber.length < 11 && !firstRender && <p className='text-red-500 text-sm'>phone number is required</p>}
                <label className='block text-lg font-semibold mb-1'>Message:</label>
                <textarea
                    id="message"
                    name="message" 
                    className='w-full p-2 resize-none h-[150px] border outline-none focus:border-2 hover:border-2 border-[#fd6d00] rounded-lg mb-4'
                    value={message}
                    onChange={handleChange}
                    placeholder='leave a message....'
                >
                </textarea>
                {message == "" && !firstRender && <p className='text-red-500 text-sm'>leave a message</p>}
                <div className='flex justify-center'>
                    <button 
                        type='submit' className='h-[40px] w-[105px] bg-[#fd6d00] text-white rounded-lg flex justify-center items-center hover:border hover:border-[#fd6d00] hover:bg-white hover:text-[#fd6d00] transition-all duration-500'>
                        {isLoading ? "loading..." : "Submit"}
                    </button>
                </div>
            </form>
            : <div className='flex-1 flex justify-center items-center'>
                <p className='text-[#fd6d00] text-base text-center md:text-xl'>Thank you for reaching out!</p>
            </div>
            }
        </div>
        </div>
    </section>
  )
})
