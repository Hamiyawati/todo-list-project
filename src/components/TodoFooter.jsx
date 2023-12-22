import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext'

const TodoFooter = () => {
  const [todos, setTodos] = useContext(TodoContext)

  const newTodosComplete = () => {
    return todos.filter(todo => todo.complete === false)
    }

  const clearAllTodos = () => {
    setTodos([])
  }

  return (
    <>
      {
        todos.length === 0 ? <h2 className="mt-6 text-red-600 text-base/7 bg-red-200 text-center">Not todo found. Please add some...</h2>
          :  <div className="row">
              <p className="text-purple-800">You have {newTodosComplete().length} to do</p>
              <button id="delete" onClick={clearAllTodos}>Clear All</button>
            </div>
        }
    </>
  )
}

export default TodoFooter;