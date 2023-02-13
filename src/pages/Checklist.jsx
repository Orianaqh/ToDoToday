import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Todo from '../components/Todo';
import moment from 'moment';
//ICONS
import { IoIosArrowBack } from 'react-icons/io';
import { GoLogoGithub, GoMarkGithub } from 'react-icons/go';
import { AiFillSmile } from 'react-icons/ai';
import { BsPlusCircleFill, BsFillClockFill } from 'react-icons/bs'

const date = moment().format('MMM [\r\n] D');
const time = moment().format('LT');

function Checklist() {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([{id: crypto.randomUUID(), name: 'Be happy!', completed: false},{id: crypto.randomUUID(), name: 'Dont cry', completed: true}]);
  const navigate = useNavigate()

  function addTodo(e){
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      name: title,
      completed: false
    };

    if (newTodo.length === '') {
      alert("ingresa algo")
    } else {
      setTodos([...todos, newTodo]);
    } 
  };

  function handleClickUpdateTodo(id, value){
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.name = value;
    setTodos(temp);
  };

  function handleDelete(id){
    const temp = todos.filter(item => item.id !== id);
    setTodos(temp);
  };

  function deleteAll(){
    const temp = todos.filter((item) => item !== item)
    setTodos(temp)
  };

  function handleStatus(id){
    const change = todos.map((todo) => {
      if(todo === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(change)
  }

  const toMe = () => {
    window.open('https://mypage-react-vite.vercel.app/', "_blank")
  };

  const toGithub = () => {
    window.open('https://github.com/Orianaqh', "_blank")
  };

  return (
    <div className='w-full flex flex-col justify-center items-center mt-[50px]'>
      <h1 className='font-black text-4xl font-body text-gray text-opacity-30 mb-[20px]'>Checklist</h1>
      <div className='mb-5'>
      <Link to={'/'}>
        <h2 className='w-[250px] md:w-[450px] xl:w-[650px] bg-light h-[60px]
        rounded-t-2xl flex
        justify-center items-center text-white font-black gap-3'>
        <IoIosArrowBack className='text-[30px]'/>
        Back to Home!
        </h2>
      </Link>

      {/* TODO */}
      <div
        className='bg-dark min-h-[380px] max-h-[380px] overflow-y-auto'
        aria-label='inputAndToDos'>
        <form
          className='flex flex-row items-center justify-center gap-3 mx-[30px]'>
        {/* INPUT TODO */}
        <div className='flex flex-row justify-center items-center mt-5 gap-2'>
          <input 
          aria-label='todoInput'
          className=' w-full p-1 px-3 text-gray text-opacity-80 font-thin
            rounded-[1rem] focus:outline-light
            border border-light'
          type='text' 
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>
          {/* AdButton TODO */}
          <button
            className=''
            onClick={addTodo}
            ><BsPlusCircleFill className='w-[30px] h-[30px] text-light'/>
          </button>
        </div>
        </form>

        <div
          aria-label='todos'
          className='flex flex-col justify-center mx-[30px] mt-5'>
          {todos.map(item => {
            return(
              <Todo
              className=''
              key={item.id}
              item={item}
              onUpdate={handleClickUpdateTodo}
              onDelete={handleDelete}
              changeStatus={handleStatus}
              />
            )
          })}
        </div>
      </div>
      

      {/* DELETE BUTTON AND TIME */}
    <div
      aria-label='deleteButtonAndTime'
      className='flex flex-row-reverse justify-center items-center gap-8 pb-5 pt-5
      w-[250px] md:w-[450px] xl:w-[650px] bg-dark h-[60px] rounded-b-2xl'>
      {/* DELETE BUTTON */}
        <div
          aria-label='buttonDeleteAll'
          className='flex justify-center items-end font-bold
            bg-darkRosa text-white'>
          <button className="bg-dark2 shadow-inner bg-opacity-30 px-4 py-2 rounded-full" onClick={deleteAll}>Delete all</button>
        </div>
      {/* TIME */}
        <div
          aria-label='time'
          className='text-background text-opacity-80
            font-bold text-lg flex flex-row justify-center items-center gap-3'>
          <BsFillClockFill/>
          <h2>{time}</h2>
        </div>
      </div>
    </div>

    {/* GITHUB and ME BUTTONS */}
    <div className='flex flex-row justify-center gap-10 md:mr-0'>
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

export default Checklist