import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { IoTrashSharp } from 'react-icons/io5';

const TodoItem = ({ todo, id, checkComplete, handleEditTodos, handleRemoveTodos }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleSave = () => {
    setOnEdit(false);
    if (editValue.trim() !== '') {
      handleEditTodos(editValue, id);
    } else {
      setEditValue(todo.name);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  const handleRemove = () => {
    handleRemoveTodos(id);
  };

  if(onEdit){
    return (
      <li>
        <input className="edit-todo" type="text" id="editValue" value={editValue} name="editValue"
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown} autoFocus />
      </li>
    )
  }else{
    return (
      <div>
        <li className="">
          <label htmlFor={id} className={todo.complete ? "active" : ""}>
          <input type="checkbox" id={id} checked={todo.complete} 
            onChange={() => checkComplete(id)} />
            {todo.name}
          </label>
          <div>
            <button disabled={todo.complete} onClick={handleOnEdit}> <FaEdit size={16}/> </button>
            <button onClick={handleRemove}> <IoTrashSharp size={16}/> </button>
          </div>
        </li>
      </div>
    )
  }
}



export default TodoItem;




// import React, {useState} from 'react';
// import {FaEdit} from 'react-icons/fa';


// function TodoItem({todo, id, checkComplete, handleEditTodos}) {
//   const [onEdit, setOnEdit] = useState(false)
//   const [editValue, setEditValue] = useState(todo.name)

//   const handleOnEdit = () => {
//     setOnEdit(true)
//   } 

//   const handleSave = id => {
//     setOnEdit(false)
//     if(editValue){
//       handleEditTodos(editValue, id)
//     } else{
//       setEditValue(todo.name)
//     }
//   }

//   if(onEdit){
//     return (
//       <li>
//         <input type="text" id="editValue" value={editValue} name="editValue"
//         onChange={e => setEditValue(e.target.value.toLowerCase())} />
//         <button onClick={() => handleSave(id)}>Save</button>
//       </li>
//     )
//   }else{
//     return (
//       <li>
//         <label htmlFor={id} className={todo.complete ? "active" : ""}>
//           <input type="checkbox" id={id} checked={todo.complete} 
//           onChange={() => checkComplete(id)} />
//           {todo.name}
//         </label>
//         <button disabled={todo.complete} onClick={handleOnEdit}> <FaEdit size={16}/> </button>
//       </li>
//     )
//   }
// }


// export default TodoItem;