import { useState } from "react";
// ICONS
import { AiTwotoneEdit,AiFillDelete,AiFillCheckCircle } from "react-icons/ai";


function Todo({item, onUpdate, onDelete, changeStatus}) {
  const [isEdit, setIsEdit] = useState(false);

  // EDIT ITEM
  function FormEdit(){
    const [newValue, setNewValue] = useState(item.name);

    function handleSubmit(e){
      e.preventDefault();
    };

    function handleClickUpdateTodo(){
      onUpdate(item.id, newValue);
      setIsEdit(false)
    };

    return(
      <form
        aria-label="updateEdit"
        className="w-full"
        onSubmit={handleSubmit}>
        <input
          type='text'
          className="todoInput w-[95%] pl-3 text-dark bg-backgroundDark rounded-md p-1 mb-1"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}/>
        <button
          type='button'
          className="text-white text-l ml-2"
          onClick={handleClickUpdateTodo}><AiFillCheckCircle/>
        </button>
      </form>
    );
  }

  // AD ITEM 
  function TodoElement(){
    return (
      <ul
        aria-label="todo"
        className="shadow-inner text-white pl-3 cursor-pointer bg-light mb-1 rounded-lg">
          <div className={item.completed ? "true" : "false"}>
            <li
              className="p-1 flex items-center justify-between"
              onClick={() => changeStatus(item)}>{item.name} 
            <div>
              <button
                type="button"
                onClick={() => setIsEdit(true)}><AiTwotoneEdit className="text-backgroundDark hover:text-white"/>
              </button>
              <button
                type='button'
                onClick={() => onDelete(item.id)}><AiFillDelete className="mx-2 text-white hover:text-rot rounded-full"/>
              </button>
            </div>
            </li>
          </div>

      </ul>
      );
  }

  return (
    <div className="todo">
      {isEdit ? <FormEdit/> : <TodoElement />}
    </div>
  );
}

export default Todo