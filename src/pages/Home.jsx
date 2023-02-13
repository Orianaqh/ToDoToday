import React from 'react'
import ImageMann from '../assets/images/vmann.png'
import Calculator from '../components/Calculator'
import { Link, useNavigate } from 'react-router-dom'
//ICONS
import { IoIosArrowForward } from 'react-icons/io';
import { GoLogoGithub, GoMarkGithub } from 'react-icons/go';
import { AiFillSmile } from 'react-icons/ai';
import { CiCalculator2 } from 'react-icons/ci';
import { CgNotes } from 'react-icons/cg';
import { BsUiChecks } from 'react-icons/bs';


function Home() {
  const navigate = useNavigate()

  const toMe = () => {
    window.open('https://mypage-react-vite.vercel.app/', "_blank")
  }
  return (
    <div className='flex flex-col md:flex-row mx-[20px]
    md:mx-[60px]'>

    {/* LEFT FLEX */}
      <div
        className='flex flex-col justify-between items-center
        md:items-start lg:items-center gap-[50px] lg:w-[70%]'>
        {/* IMAGE */}
        <img src={ImageMann} className='w-full md:w-[400px] lg:w-[500px]'/>
        {/* BUTTONS - LOGO */}
        <div className='flex flex-col w-full justify-center items-center md:justify-end gap-16'>
          <h1
            className='font-black font-body text-center text-[60px] leading-[50px]
            md:leading-[70px] text-blackLight bg-backgroundDark bg-opacity-30
            shadow-inner rounded-full w-[300px] h-[120px] flex justify-center items-center'>ToDo <br></br> TODAY</h1>
          <div className='flex flex-row md:flex-col justify-start items-start gap-2 md:gap-5'>
            <button className='w-[45px] h-[45px] md:h-[60px] bg-backgroundDark bg-opacity-30 shadow-inner
              rounded-full text-gray text-opacity-20 font-black
              flex justify-center items-center'>
              <GoLogoGithub className='text-5xl hidden lg:flex'/>
              <GoMarkGithub className='text-3xl lg:hidden'/>
            </button>
            <button
              onClick={toMe}
              className='w-[45px] h-[45px] md:h-[60px] mr-16 bg-backgroundDark bg-opacity-30 shadow-inner
              rounded-full text-gray text-opacity-20 font-black flex
              justify-center items-center'><AiFillSmile className='text-3xl'/></button>
          {/* MOBILE VERSION */}
            <button
              onClick={() => navigate('/checklist')}
              className='md:hidden relative w-[45px] h-[45px] bg-dark rounded-xl text-backgroundDark text-opacity-50 font-black
              flex justify-center items-center'><BsUiChecks className='text-xl'/></button>
            <button
            onClick={() => navigate('/notes')}
              className='md:hidden relative w-[45px] h-[45px] bg-dark rounded-xl text-backgroundDark text-opacity-50 font-black
              flex justify-center items-center'><CgNotes className='text-xl'/></button>
            <button
            onClick={() => navigate('/notes')}
              className='md:hidden relative w-[45px] h-[45px] bg-dark rounded-xl text-backgroundDark text-opacity-50 font-black
              flex justify-center items-center'><CiCalculator2 className='text-2xl'/></button>
          </div>
          
        </div>
      </div>

    {/* RIGHT FLEX */}
      <div className='flex flex-col md:w-[40%] lg:w-[50%] items-center md:items-end justify-center md:justify-end'>
      {/* CHECKLIST */}
        <div className='shadow-inner'>
          <Link to={'/checklist'}>
            <h2 className='hidden w-[100px] md:w-[200px] lg:w-[250px] bg-light h-[60px]
            rounded-2xl md:rounded-none md:rounded-t-2xl md:flex
            justify-end items-center text-white font-black'>Checklist<IoIosArrowForward className='text-[40px] mr-3'/>
            </h2>
          </Link>
          <p className='hidden md:flex w-[200px] lg:w-[250px] bg-dark h-[80px] rounded-b-2xl relative -top-1'></p>
        </div>
      {/* NOTES */}
        <div className='mt-[30px]'>
          <Link to={'/notes'}>
          <h2 className='hidden w-[100px] md:w-[200px] lg:w-[250px] bg-light h-[60px]
            rounded-2xl md:rounded-none md:rounded-t-2xl md:flex
            justify-end items-center text-white font-black'>You Notes<IoIosArrowForward className='text-[40px] mr-3'/>
            </h2>
          </Link>
          <p className='hidden md:flex w-[200px] lg:w-[250px] bg-dark h-[80px] rounded-b-2xl relative -top-1'></p>
        </div>
      {/* CALCULATOR */}
      {/* <Calculator /> */}
      </div>

    </div>
  )
}

export default Home