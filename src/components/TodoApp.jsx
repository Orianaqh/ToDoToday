import React, { useState } from 'react'
import Todo from './Todo';
import moment from 'moment';

// Icons
import { BsPlusCircleFill } from 'react-icons/bs'

const date = moment().format('MMM [\r\n] D');
const time = moment().format('LT');

export function TodoApp() {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([{id: crypto.randomUUID(), name: 'Be happy!', completed: false},{id: crypto.randomUUID(), name: 'Dont cry', completed: true}]);

  function addTodo(e){
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      name: title,
      completed: false
    };

    if (newTodo.length === 0) {
      console.log('ist leer')
    } else  
    setTodos([...todos, newTodo]);
    setTitle('') 
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

  return (
    <div className='flex flex-col'>
    <div
      className='
        w-auto h-[900px]
        mt-[40px]
        p-10
        bg-white border-radius rounded-[30px]
        flex flex-col justify-start items-center gap-10
        '>
      
      {/* SATZ */}
      <div className=' flex flex-col gap-5'>
        <div className='flex flex-col justify-start'>
        <h1 className='text-4xl font-bold text-darkRosa'>Hi, You!</h1>
        <h3 className='text-4xl font-light opacity-50'>you have something...</h3>
        </div>
      
      {/* LOGO - DATUM */}
        <div
          aria-label='logoAndDate'
          className="
            flex flex-row items-center
            gap-[80px]
            bg-lightRosa p-4 rounded-3xl
            ">
          <h2
            aria-label='logo'
            className='
            p-5 rounded-full
            font-bold text-background text-xl
            bg-white'
            >To do<br></br>today!</h2>
          <h2
            aria-label='date'
            className='text-white
            font-bold text-7xl'
            >{date}</h2>
        </div>
      </div>

      <div
        aria-label='inputAndToDos'>
        <form
          className='flex flex-row items-center justify-center gap-5 mb-[30px]'>
        {/* INPUT TODO */}
          <input 
          aria-label='todoInput'
          className=' w-full p-2
            rounded-[1rem] focus:outline-lightGray
            border border-lightGray
            '
          type='text' 
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>

        {/* AdButton TODO */}
        <button
          className=''
          onClick={addTodo}
          ><BsPlusCircleFill className='w-[30px] h-[30px] text-lightGray'/>
        </button>
        </form>

        <div
          aria-label='todos'
          className='w-[400px] flex-col'>
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
    </div>

      {/* DELETE BUTTON AND TIME */}
    <div
      aria-label='deleteButtonAndTime'
      className='flex flex-col
        justify-center items-center mt-[-120px]'>
      {/* DELETE BUTTON */}
        <div
          aria-label='buttonDeleteAll'
          className='w-[10em] p-2 rounded-full
            flex justify-center items-end font-bold text-xl
            bg-darkRosa text-white
          '>
          <button className="btn btn-secondary" onClick={deleteAll}>Delete all</button>
        </div>

      {/* TIME */}
        <div
          aria-label='time'
          className='text-darkRosa
            font-bold text-3xl'>
          <h2>{time}</h2>
        </div>
      </div>
    </div>
  );
}

// export default TodoApp