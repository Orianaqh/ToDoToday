import React from 'react'

function Wrapper({children}) {
  return (
    <div
    aria-label='wrapper'
    className='hidden md:flex flex-col my-3 mt-[70px] mb-[15px] w-[200px] h-[340px] lg:w-[300px] xl:h-[410px] bg-backgroundDark
    bg-opacity-30 shadow-inner rounded-xl p-3'>
      {children}
    </div>
  )
}

export default Wrapper