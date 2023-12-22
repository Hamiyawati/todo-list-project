import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

function TodoFilter() {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(TodoContext);

  // const handleCheckAll = () => {
  //   const newTodos = [...todos];
  //   newTodos.forEach(todo => {
  //     todo.complete = !checkAll;
  //   });
  //   setTodos(newTodos);
  //   setCheckAll(!checkAll);
  // };

  // const newTodosComplete = () => {
  //   return todos.filter(todo => todo.complete === false);
  // };

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




// import React, { useState } from 'react';

// function TodoFilter({ setFilter }) {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const handleFilterClick = (filter) => {
//     setActiveFilter(filter);
//     setFilter(filter); 
//   };

//   return (
//     <div className="controls">
//       <div className="filter">
//         <button
//           className={activeFilter === 'all' ? 'active' : ''}
//           onClick={() => handleFilterClick('all')}
//         >
//           All
//         </button>
//         <button
//           className={activeFilter === 'active' ? 'active' : ''}
//           onClick={() => handleFilterClick('active')}
//         >
//           Active
//         </button>
//         <button
//           className={activeFilter === 'completed' ? 'active' : ''}
//           onClick={() => handleFilterClick('completed')}
//         >
//           Completed
//         </button>
//       </div>
//     </div>
//   );
// }

// export default TodoFilter;
