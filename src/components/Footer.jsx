import React from 'react'

function Footer() {
  const handleClick = () => {
    window.open('https://icons8.com/illustrations/style--3d-casual-life', "_blank")
  };

  return (
    <div className='w-[250px] h-[60px] mx-auto bg-rot absolute
    bottom-0 md:w-[350px] md:h-[40px]
    xl:w-[400px] xl:h-[250px]
    rounded-t-[50px]
    xl:rounded-tl-[120px] xl:rounded-bl-[120px]
    xl:right-[-300px] xl:top-[31%]
    transition duration-700 ease-in-out
    hover:translate-x-[-250px] flex justify-center items-center'>
      <h2 className='hidden w-[70px] text-white font-body font-black text-4xl mr-8 ml-[-60px]
      rotate-[90deg] xl:flex xl:flex-col justify-start items-center relative'>more?</h2>
      {/* RIGHTS */}
      <div className='flex flex-col md:flex-row lg:flex-col justify-center items-center'>
        <p className='
          md:text-[15px] text-xs xl:text-xl text-center text-white text-opacity-50 font-regular'>
          {' '}  <p className='xl:text-[15px]'> &copy; 2023 All rights reserved{' '}</p> 
        </p>
        <div className="inline">
          <span className='font-regular text-[15px] xl:text-l text-center text-dark2'>Image credits to</span>
          <span className="inline relative left-2 mr-4 bg-dark 
          text-white font-black rounded-full p-1 text-xs cursor-pointer"
          onClick={handleClick}>O!</span>
        </div>
      {/* LOGO */}
          {/* <span className='font-black text-5xl font-body mr-2'> ToDo TODAY.</span> */}
      </div>
        <div className='hidden xl:inline-block w-[943px] mx-auto rounded-tr-[120px] rounded-br-[120px] bg-rot
    h-[100px] absolute xl:left-[-1820px] top-[160%]
    transition duration-700 ease-in-out'></div>
    </div>
  )
}

export default Footer