import React from 'react'
import Calculator from '../components/Calculator'
import { Link, useNavigate } from 'react-router-dom'

import { IoIosArrowBack } from 'react-icons/io';
import { GoMarkGithub } from 'react-icons/go';
import { AiFillSmile } from 'react-icons/ai';



function CalculatorPage() {
  const navigate = useNavigate()

  const toMe = () => {
    window.open('https://mypage-react-vite.vercel.app/', "_blank")
  };

  const toGithub = () => {
    window.open('https://github.com/Orianaqh', "_blank")
  };

  return (

    <div className='w-full flex flex-col justify-center items-center mt-[50px]'>
      <h1 className='font-black text-4xl font-body text-gray text-opacity-30 mb-[20px]'>Calculator</h1>
 
        <div className='mt-[-70px] mb-5'>
          <Calculator/>
        </div>

            {/* GITHUB and ME BUTTONS */}
    <div className='flex flex-row justify-center gap-10 md:mr-0'>
        <div className='flex flex-row justify-center items-center gap-3'>
          <button
            type='button'
            onClick={toGithub}
            className='w-[45px] h-[45px] bg-backgroundDark bg-opacity-30 shadow-inner
            rounded-full text-gray text-opacity-20 font-black
            flex justify-center items-center'>
            <GoMarkGithub className='text-3xl'/>
          </button>
          <button
            type='button'
            onClick={toMe}
            className='w-[45px] h-[45px] bg-backgroundDark bg-opacity-30 shadow-inner
            rounded-full text-gray text-opacity-20 font-black flex
            justify-center items-center'><AiFillSmile className='text-3xl'/>
          </button>
          <button
            type='button'
            onClick={()=>navigate('/')}
            className='font-black font-body text-center text-[17px] leading-[15px]
            text-gray text-opacity-30 bg-backgroundDark bg-opacity-30
            shadow-inner rounded-full w-[45px] h-[45px] flex justify-center items-center'>ToDo <br></br> TODAY
          </button>
        </div>
    </div>
    </div>
  )
}

export default CalculatorPage