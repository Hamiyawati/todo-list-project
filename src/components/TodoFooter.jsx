import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext'

function TodoFooter() {
  // const [setCheckAll] = useState(false)
  const [todos, setTodos] = useContext(TodoContext)

// function TodoFooter() {
//   const [checkAll, setCheckAll] = useState(false)
//   const [todos, setTodos] = useContext(TodoContext)

  // const handleCheckAll = () => {
  //   const newTodos = [...todos]
  //   newTodos.forEach(todo => {
  //     todo.complete = !checkAll
  //   })
  //   setTodos(newTodos)
  //   setCheckAll(!checkAll)
  // }

  const newTodosComplete = () => {
    return todos.filter(todo => todo.complete === false)
    }

  const clearAllTodos = () => {
    setTodos([])
    // setCheckAll(false)
  }

  return (
    <>
      {
        todos.length === 0 ? <h2 className="mt-6 text-red-600 text-lg">Not todo found. Please add some...</h2>
          :  <div className="row">
              {/* <label>
                <input type="checkbox" name="all" id="all" 
                onChange={handleCheckAll} checked={checkAll} />
                All
              </label> */}
              <p className="text-purple-800">You have {newTodosComplete().length} to do</p>
              <button id="delete" onClick={clearAllTodos}>Clear All</button>
            </div>
        }
    </>
  )
}

export default TodoFooter;











// import React, { useContext, useState, useEffect } from 'react';
// import { DataContext } from './DataProvider';

// function TodoFooter() {
//   const [checkAll, setCheckAll] = useState(false);
//   const [todos, setTodos] = useContext(DataContext);
//   const [filteredTodos, setFilteredTodos] = useState([]);

//   useEffect(() => {
//     setFilteredTodos(todos);
//   }, [todos]);

//   // const handleCheckAll = () => {
//   //   const newTodos = [...filteredTodos];
//   //   newTodos.forEach(todo => {
//   //     todo.complete = !checkAll;
//   //   });
//   //   setFilteredTodos(newTodos);
//   //   setCheckAll(!checkAll);
//   // };

//   const newTodosComplete = () => {
//     return filteredTodos.filter(todo => todo.complete === false);
//   };

//   const deleteTodo = () => {
//     setTodos(newTodosComplete());
//     setCheckAll(false);
//   };

//   const filterTodos = (filterType) => {
//     if (filterType === 'all') {
//       setFilteredTodos(originalTodos);
//     } else if (filterType === 'active') {
//       setFilteredTodos(originalTodos.filter(todo => !todo.complete));
//     } else if (filterType === 'completed') {
//       setFilteredTodos(originalTodos.filter(todo => todo.complete));
//     }

//     setCheckAll(false);
//   };

//   return (
//     <>
//       {todos.length === 0 ? (
//         <h2>Not todo found. Please add some...</h2>
//       ) : (
//         <div className="row">
//           <button onClick={() => filterTodos('all')}>All</button>
//           <button onClick={() => filterTodos('active')}>Active</button>
//           <button onClick={() => filterTodos('completed')}>Completed</button>
//           <p>You have {newTodosComplete().length} to do</p>
//           <button id="delete" onClick={deleteTodo}>
//             Clear
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

// export default TodoFooter;






