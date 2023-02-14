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
  };

  const toGithub = () => {
    window.open('https://github.com/Orianaqh', "_blank")
  };

  return (
    <div className='flex flex-col justify-center md:flex-row
    md:mx-[60px] xl:mx-0'>

    {/* LEFT FLEX */}
      <div
        className='flex flex-col justify-between xl:items-center items-center
        gap-[20px] lg:gap-[30px]'>
        {/* IMAGE */}
        <img src={ImageMann} className='w-full md:w-[400px] lg:w-[500px] xl:w-[500px]'/>
        {/* LOGO */}
          <h1
            className='font-black font-body text-center text-[60px] leading-[50px]
            text-blackLight bg-backgroundDark bg-opacity-30
            shadow-inner rounded-full w-[200px] h-[150px] md:w-[300px] md:h-[120px] md:mt-[40px] flex justify-center items-center'>ToDo <br></br> TODAY</h1>
        {/* BUTTONS  */}
        <div className='flex flex-col justify-center items-center gap-3'>
            {/* GITHUB and ME BUTTONS */}
            <div className='flex flex-row justify-center gap-2'>
              <p
                className='hidden text-gray text-opacity-30 md:flex justify-center leading-[15px]
                items-center text-center'>Hey! visit my Github <br></br>and/or my Page</p>
              <button
                onClick={toGithub}
                className='w-[45px] h-[45px] bg-backgroundDark bg-opacity-30 shadow-inner
                rounded-full text-gray text-opacity-20 font-black
                flex justify-center items-center'>
                <GoMarkGithub className='text-3xl'/>
              </button>
              <button
                onClick={toMe}
                className='w-[45px] h-[45px] bg-backgroundDark bg-opacity-30 shadow-inner
                rounded-full text-gray text-opacity-20 font-black flex
                justify-center items-center'><AiFillSmile className='text-3xl'/>
              </button>
            </div>
          {/* MOBILE VERSION - BUTTONS*/}
          <div className='md:hidden flex flex-row justify-center items-center gap-2'>
            <button
              onClick={() => navigate('/checklist')}
              className='md:hidden relative w-[45px] h-[45px] bg-light rounded-xl text-dark2 text-opacity-80 font-black
              flex justify-center items-center'><BsUiChecks className='text-xl'/></button>
            <button
            onClick={() => navigate('/notes')}
              className='md:hidden relative w-[45px] h-[45px] bg-light rounded-xl text-dark2 text-opacity-80 font-black
              flex justify-center items-center'><CgNotes className='text-xl'/></button>
            <button
            onClick={() => navigate('/calculate')}
              className='md:hidden relative w-[45px] h-[45px] bg-light rounded-xl text-backgroundDark text-opacity-80 font-black
              flex justify-center items-center'><CiCalculator2 className='text-2xl'/></button>
          </div>
        </div>
      </div>

    {/* RIGHT FLEX */}
      <div className='hidden md:flex flex-col md:w-[40%] lg:w-[50%] xl:w-[400px] items-center md:items-end justify-center md:justify-start'>
      {/* CALCULATOR */}
        <Calculator />
      {/* CHECKLIST */}
        <div className='shadow-inner'>
          <Link to={'/checklist'}>
            <h2 className='hidden w-[100px] md:w-[200px] lg:w-[300px] bg-light h-[60px]
            rounded-2xl md:rounded-none md:rounded-t-2xl md:flex
            justify-end items-center text-white font-black gap-3'>
              <BsUiChecks className='text-xl'/>
              Checklist
              <IoIosArrowForward className='text-[40px] mr-3'/>
            </h2>
          </Link>
          <p className='hidden md:flex w-[200px] lg:w-[300px] bg-dark h-[80px] rounded-b-2xl relative -top-1'></p>
        </div>
      {/* NOTES */}
        <div className='mt-[10px]'>
          <Link to={'/notes'}>
          <h2 className='hidden w-[100px] md:w-[200px] lg:w-[300px] bg-light h-[60px]
            rounded-2xl md:rounded-none md:rounded-t-2xl md:flex
            justify-end items-center text-white font-black gap-3'>
              <CgNotes className='text-xl'/>
              You Notes
              <IoIosArrowForward className='text-[40px] mr-3'/>
            </h2>
          </Link>
          <p className='hidden md:flex w-[200px] lg:w-[300px] bg-dark h-[80px] rounded-b-2xl relative -top-1'></p>
        </div>
      </div>

    </div>
  )
}

export default Home