import React from "react";
import AppHeader from "../app-header/app-header";
import TodoList from "../todo-list/todo-list";
import './app.scss';

const App = () => {
  const todoData = [
    {id: 1, label: 'Drink coffee', important: false},
    {id: 2, label: 'Make awesome app', important: true},
    {id: 3, label: 'Have a lunch', important: false}
  ];
  return (
    <div className="app">
      <AppHeader todo={3} done={2}/> <TodoList todos={todoData}/>
    </div>
  )
}
export default App;
