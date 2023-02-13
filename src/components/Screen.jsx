import Textfit from 'https://cdn.skypack.dev/react-textfit@1.1.1'
import React from 'react'

function Screen({value}) {
  return (
    <Textfit
      aria-label='screen'
      className='flex items-center justify-end bg-light text-white font-bold rounded-xl w-full h-[50px] mb-2 mt-5'
      mode='single'
      max={70}>
      {value}
    </Textfit>
  )
}

export default Screen