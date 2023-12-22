import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoFilter = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(TodoContext);

  const filterTodos = (filterType) => {
    let filteredTodos = [];

    if (filterType === 'all') {
      filteredTodos = todos;
    } else if (filterType === 'active') {
      filteredTodos = todos.filter(todo => !todo.complete);
    } else if (filterType === 'completed') {
      filteredTodos = todos.filter(todo => todo.complete);
    }

    setTodos(filteredTodos);
    setCheckAll(false);
  };

  return (
    <div className="filter">
      <button onClick={() => filterTodos('all')}>All</button>
      <button onClick={() => filterTodos('active')}>Active</button>
      <button onClick={() => filterTodos('completed')}>Completed</button>
    </div>
  );
}

export default TodoFilter;
