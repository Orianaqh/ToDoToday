import React from 'react'

function Wrapper({children}) {
  return (
    <div
    aria-label='wrapper'
    className='hidden md:flex flex-col mb-[55px] w-[200px] h-[360px] lg:w-[300px] bg-backgroundDark
    bg-opacity-30 shadow-inner rounded-b-xl p-3'>
      {children}
    </div>
  )
}

export default Wrapper