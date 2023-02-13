import React from 'react'
import ImageMann from '../assets/images/vmann.png'
import Calculator from '../components/Calculator'
import { Link, useNavigate } from 'react-router-dom'
//ICONS
import { IoIosArrowForward } from 'react-icons/io';

function Home() {
  const navigate = useNavigate()

  const toMe = () => {
    window.open('https://mypage-react-vite.vercel.app/', "_blank")
  }
  return (
    <div className='flex flex-col lg:flex-row mx-[20px] lg:mx-[200px]'>

    {/* LEFT FLEX */}
      <div className='flex flex-col justify-between items-center gap-[100px] lg:w-[80%]'>
        {/* IMAGE */}
        <img src={ImageMann} className='w-full lg:w-[1100px]'/>
        {/* BUTTONS - LOGO */}
        <div className='flex flex-row-reverse w-full justify-center md:justify-end gap-5'>
          <h1 className='font-black font-body text-[80px] leading-[80px] md:leading-[80px] text-light'>ToDo <br></br> TODAY</h1>
          <div className='flex flex-col-reverse justify-start items-start gap-3 md:gap-5'>
            <button className='hidden md:flex md:w-[100px] md:h-[60px] bg-dark rounded-xl text-light'>...</button>
            <button
              onClick={toMe}
              className='w-[100px] h-[45px] md:h-[60px] bg-dark rounded-xl text-light font-black'>me</button>
          {/* MOBILE VERSION */}
            <button
              onClick={() => navigate('/checklist')}
              className='md:hidden relative w-[100px] h-[45px] bg-light rounded-xl text-white font-black'>Checklist</button>
            <button
            onClick={() => navigate('/notes')}
              className='md:hidden relative w-[100px] h-[45px] bg-light rounded-xl text-white font-black'>Notes</button>
          </div>
        </div>
      </div>

    {/* RIGHT FLEX */}
      <div className='flex flex-col lg:w-[30%] items-center lg:items-end justify-center lg:justify-end'>
      {/* CHECKLIST */}
        <div className='shadow-inner'>
          <Link to={'/checklist'}>
            <h2 className='hidden w-[100px] lg:w-[500px] bg-light h-[60px] lg:h-[110px] rounded-2xl md:rounded-t-2xl md:flex justify-end items-center'>Checklist<IoIosArrowForward className='text-[40px] mr-3'/></h2>
          </Link>
          <p className='hidden md:relative w-[500px] bg-dark h-[80px] rounded-b-2xl relative -top-1'></p>
        </div>
      {/* NOTES */}
        <div className='mt-[30px]'>
          <Link to={'/notes'}>
          <h2 className='hidden w-[100px] lg:w-[500px] bg-light h-[60px] lg:h-[110px] rounded-2xl md:rounded-t-2xl md:flex justify-end items-center'>Notes<IoIosArrowForward className='text-[40px] mr-3'/></h2>
          </Link>
          <p className='hidden md:relative w-[500px] bg-dark h-[80px] rounded-b-2xl relative -top-1'></p>
        </div>
      {/* CALCULATOR */}
      <Calculator />
      </div>

    </div>
  )
}

export default Home