import React from 'react'

function Button({value, onClick}) {
  return (
    <button className='shadow-inner bg-white bg-opacity-20 rounded-lg m-[1px] p-3 hover:bg-light' onClick={onClick}>
      {value}
    </button>
  )
}

export default Button