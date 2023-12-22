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
    <form autoComplete="off" onSubmit={addTodo}>
      <input type="text" name="todos" id="todos" ref={todoInput}
      required placeholder="Add a new task" value={todoName}
      onChange={e => setTodoName(e.target.value)} />

      <button type="submit"> Create <CiCirclePlus size={16} /> </button>
    </form>
  );
}

export default TodoForm;