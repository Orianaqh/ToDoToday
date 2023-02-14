import React from 'react'

function Button({value, onClick}) {
  return (
    <button className='shadow-inner bg-white
      bg-opacity-20 rounded-lg xl:m-[5px] m-1 p-2
      xl:p-3 hover:bg-light'
      onClick={onClick}>
      {value}
    </button>
  )
}

export default Button