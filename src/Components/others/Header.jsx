import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-end  '>
        <h1 className='text-2xl text-white'>
           <span className='font-medium'>Hello</span> <br />
            <span className='text-3xl font-semibold'>Zohaib 👋</span>
        </h1>
        <button className='bg-red-500 text-white px-4 py-2.5 rounded-lg text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header