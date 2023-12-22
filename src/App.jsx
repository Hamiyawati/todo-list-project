import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import TodoFilter from "./components/TodoFilter";


const App = () => {
  return (
    <div className="App">
      <h1 className="text-center tracking-widest text-4xl font-extrabold mb-8">TODO</h1>
      <TodoForm />
      <TodoFilter />
      <TodoList />
      <TodoFooter />
    </div>
  )
}

export default App;
