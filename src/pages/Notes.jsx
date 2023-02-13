import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
//ICONS
import { IoIosArrowBack } from 'react-icons/io';
import { GoLogoGithub, GoMarkGithub } from 'react-icons/go';
import { AiFillSmile } from 'react-icons/ai';

function Notes() {
  const navigate = useNavigate()
  const toMe = () => {
    window.open('https://mypage-react-vite.vercel.app/', "_blank")
  };

  const toGithub = () => {
    window.open('https://github.com/Orianaqh', "_blank")
  };
  return (
    <div className='w-full flex flex-col justify-center items-center mt-[50px]'>
      <h1 className='font-black text-4xl font-body text-gray text-opacity-30 mb-[20px]'>Notes</h1>
      <div className='mb-5'>
      <Link to={'/'}>
        <h2 className='w-[250px] md:w-[450px] xl:w-[650px] bg-light h-[60px]
        rounded-t-2xl flex
        justify-center items-center text-white font-black gap-3'>
        <IoIosArrowBack className='text-[30px]'/>
        Back to Home!
        </h2>
      </Link>
      <p className='flex w-[250px] md:w-[450px] xl:w-[650px] bg-dark min-h-[300px]
      max-h-[500px] overflow-x-auto rounded-b-2xl relative -top-1'></p>
    </div>

    {/* GITHUB and ME BUTTONS */}
    <div className='flex flex-col justify-center gap-2 md:mr-0'>
      <p
        className='text-gray text-opacity-30 md:flex justify-center leading-[15px]
        items-center text-center'>Hey! visit my Github <br></br>and/or my Page</p>
        <div className='flex flex-row justify-center items-center gap-3'>
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
          <button
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

export default Notes