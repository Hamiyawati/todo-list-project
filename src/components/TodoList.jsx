import React, {useContext} from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../context/TodoContext';

function TodoList() {
  const [todos, setTodos] = useContext(TodoContext);
  
  const switchComplete = id =>{
    const newTodos = [...todos]
    newTodos.forEach((todo, index) => {
      if(index === id){
        todo.complete = !todo.complete
      }
    })
    setTodos(newTodos)
  }

  const handleEditTodos = (editValue, id) => {
    const newTodos = [...todos]
    newTodos.forEach((todo, index) => {
      if(index === id){
        todo.name = editValue
      }
    })
    setTodos(newTodos)
  }

  const handleRemoveTodos = (id) => {
    const newTodos = todos.filter((todo, index) => index !== id);
    setTodos(newTodos);
  };


  return (
    <ul>
      {
        todos.map((todo, index) => (
          <TodoItem todo={todo} key={index} id={index} 
          checkComplete={switchComplete} handleEditTodos={handleEditTodos} handleRemoveTodos={handleRemoveTodos} />
        ))
      }
    </ul>
  );
}

export default TodoList;