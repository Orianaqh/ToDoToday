import React from 'react'

function Footer() {
  const handleClick = () => {
    window.open('https://icons8.com/illustrations/style--3d-casual-life', "_blank")
  };

  return (
    <div className='hidden w-[400px] mx-auto rounded-tl-[120px] rounded-bl-[120px] bg-rot
    h-[250px] absolute md:flex right-[-300px] top-[30%]
    transition duration-700 ease-in-out hover:translate-x-[-250px]'>
      <h2 className='w-[70px] text-white font-body font-black text-4xl mx-8
      rotate-[90deg] flex flex-col justify-center items-center relative'>more?</h2>
      {/* RIGHTS */}
      <div className='flex flex-col justify-center items-center'>
        <p className='
          text-xl text-center text-white text-opacity-50 font-regular mt-3'>
          {' '}
          &copy; <p className="hidden md:inline md:mr-2">2023 <br>
          </br> All rights reserved{' '}</p> 
        </p>
        <div className="inline">
          <span className='font-regular text-l text-center text-background'>Image credits to</span>
          <span className="inline relative left-2 mr-4 bg-background 
          text-light font-black rounded-full p-1 text-xs cursor-pointer"
          onClick={handleClick}>O!</span>
        </div>
      {/* LOGO */}
          {/* <span className='font-black text-5xl font-body mr-2'> ToDo TODAY.</span> */}
      </div>
        <div className='w-[943px] mx-auto rounded-tr-[120px] rounded-br-[120px] bg-rot
    h-[100px] absolute left-[-1850px] top-[160%]
    transition duration-700 ease-in-out'></div>
    </div>
  )
}

export default Footer