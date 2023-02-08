import React from 'react'
import ImageMann from '../assets/images/vmann.png'
import Calculator from '../components/Calculator'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-row mx-[200px]'>

    {/* LEFT FLEX */}
      <div className='flex flex-col justify-between items-center gap-[200px] w-[80%]'>
        {/* IMAGE */}
        <img src={ImageMann} className='w-[1050px]'/>
        {/* BUTTONS - LOGO */}
        <div className='flex flex-row-reverse w-full justify-end gap-5'>
          <h1 className='font-black font-body text-[80px] leading-[70px] text-light'>ToDo <br></br> TODAY</h1>
          <div className='flex flex-col justify-start items-start gap-5'>
            <button className='w-[100px] h-[60px] bg-dark rounded-xl text-light'>...</button>
            <button className='w-[100px] h-[60px] bg-dark rounded-xl text-light'>---</button>
          </div>
        </div>
      </div>

    {/* RIGHT FLEX */}
      <div className='flex flex-col w-[30%] items-center justify-center'>
      {/* CHECKLIST */}
        <div className='shadow-inner'>
          <Link to={'/checklist'}>
            <h2 className='w-[500px] bg-light h-[110px] rounded-t-2xl'></h2>
          </Link>
          <p className='w-[500px] bg-dark h-[80px] rounded-b-2xl relative -top-1'></p>
        </div>
      {/* NOTES */}
        <div className='mt-[30px]'>
          <Link to={'/notes'}>
            <h2 className='w-[500px] bg-light h-[110px] rounded-t-2xl'></h2>
          </Link>
          <p className='w-[500px] bg-dark h-[80px] rounded-b-2xl relative -top-1'></p>
        </div>
      {/* CALCULATOR */}
      <Calculator />
      </div>

    </div>
  )
}

export default Home