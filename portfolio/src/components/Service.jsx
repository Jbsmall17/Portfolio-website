import React from 'react'

export default function Service({icon,name,desc}) {
  return (
    <div className='flex-1 bg-[#f8f8f8] px-4 py-6 rounded-lg mb-20'>
        {icon}
        <p className='text-lg font-semibold my-2'>{name}</p>
        <p className='text-sm'>{desc}</p>
    </div>
  )
}
