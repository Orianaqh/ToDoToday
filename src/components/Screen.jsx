import Textfit from 'https://cdn.skypack.dev/react-textfit@1.1.1'
import React from 'react'

function Screen({value}) {
  return (
    <div 
      aria-label='screen'
      className='flex items-center justify-end 
      bg-white text-light text-2xl font-regular
      rounded-xl w-full h-[50px] my-4 p-2'
      mode='single'
      max={70}>
      {value}
    </div>
  )
}

export default Screen