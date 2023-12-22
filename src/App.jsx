import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
// import TodoFilter from "./components/TodoFilter";


function App() {
  return (
    <div className="App">
      <h1>To Do</h1>
      <TodoForm />
      {/* <TodoFilter /> */}
      <TodoList />
      <TodoFooter />
    </div>
  );
}

export default App;
