import React from 'react'

function ButtonBox({children}) {
  return (
    <div
      aria-label='buttonBox'
      className='grid grid-cols-4'>{children}</div>
  )
}

export default ButtonBox