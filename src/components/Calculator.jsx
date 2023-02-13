import React from 'react'
import { useState } from 'react'

function Calculator() {
  const [number, setNumber] = useState(0)
  return (
    <div className='mt-[20px] md:mt-[100px] shadow-inner'>

      <div className='hidden w-[200px] lg:w-[500px] bg-dark h-[160px] rounded-t-2xl justify-center md:flex items-center'>
        <input 
          placeholder='000'
          className='w-[150px] lg:w-[450px] bg-dark2 h-[100px] rounded-xl p-5 placeholder:text-[60px] placeholder:text-right'>
          </input>
      </div>
      <p className='hidden w-[500px] bg-light h-[450px] rounded-b-2xl md:relative -top-1'></p>
    </div>
  )
}

export default Calculator