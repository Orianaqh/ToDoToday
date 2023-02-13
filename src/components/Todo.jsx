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
        className=""
        onSubmit={handleSubmit}>
        <input
          type='text'
          className="todoInput"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}/>
        <button
          className="btn btn-primary me-md-2"
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
        className="shadow-inner bg-light mb-1 rounded-lg">
          <div className={item.completed ? "true" : "false"}>
            <li
              className="p-1 flex items-center justify-between"
              onClick={() => changeStatus(item)} >{item.name} 
            <div className="">
              <button
                className="btn btn-primary me-md-2"
                type="button"
                onClick={() => setIsEdit(true)}><AiTwotoneEdit/>
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => onDelete(item.id)}><AiFillDelete/>
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