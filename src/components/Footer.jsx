import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-blackLight h-[50px] absolute bottom-0'>
        <p className='
          text-l text-center text-white text-opacity-30 font-thin mt-3'>
          {' '}
          &copy; <p className="hidden md:inline md:mr-2">2023 All rights reserved{' '}</p> 
          <span className='font-black font-body mr-2'> ToDo TODAY.</span>
        </p>
    </div>
  )
}

export default Footer