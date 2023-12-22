import React, {useState, useContext, useRef, useEffect} from 'react';
import {CiCirclePlus} from 'react-icons/ci'
import { TodoContext } from '../context/TodoContext';

const TodoForm = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const [todoName, setTodoName] = useState('');
  const todoInput = useRef();

  const addTodo = e =>{
    e.preventDefault();
    setTodos([...todos, {name: todoName, complete: false}])
    setTodoName('');
    todoInput.current.focus()
  }

  useEffect(() => {
    todoInput.current.focus()
  }, [])
  
  return (
    <form autoComplete="off" onSubmit={addTodo} className="flex w-full h-10 mt-5 gap-2">
      <input type="text" name="todos" id="todos" ref={todoInput}
      required placeholder="What to do..." value={todoName}
      onChange={e => setTodoName(e.target.value)} className="h-full flex-8 px-2 rounded-lg text-sm outline-none"/>

      <button type="submit" className="flex h-full flex-1 rounded-lg text-sm items-center gap-x-1.5 bg-purple-600 border-purple-600 text-white"> Add <CiCirclePlus size={16} /> </button>
    </form>
  );
}

export default TodoForm;