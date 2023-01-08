import { useState } from "react";


function Todo({item, onUpdate, onDelete, changeStatus}) {
  const [isEdit, setIsEdit] = useState(false);


  // ------------------- component - lass uns Item verändern
  function FormEdit(){
    const [newValue, setNewValue] = useState(item.name);

    function handleSubmit(e){
      e.preventDefault();
    };

  // ------------------- component - lass uns Item verändern
    function handleClickUpdateTodo(){
      onUpdate(item.id, newValue);
      setIsEdit(false)
    };

    return(
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input type='text' className="todoInput" value={newValue} onChange={(e) => setNewValue(e.target.value)}/>
        <button className="btn btn-primary me-md-2" onClick={handleClickUpdateTodo}>L</button>
      </form>
    );
  }

  // ------------------- component - addiert item
  function TodoElement(){
    return (
      <ul className="">
        <section className="itemStyle">
          <div className={item.completed ? "true" : "false"}>
            <li className="list-group-item" onClick={() => changeStatus(item)} >{item.name} 
            <div className="">
              <button className="btn btn-primary me-md-2" type="button" onClick={() => setIsEdit(true)}>E</button>
              <button className="btn btn-secondary" onClick={() => onDelete(item.id)}>X</button>
            </div>
            </li>
          </div>
        </section>
        
      
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