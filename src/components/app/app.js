import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import './app.css';
import ItemStatusFilter from "../item-status-filter/item-status-filter";

const App = () => {
  const todoData = [
    {id: 1, label: 'Drink coffee', important: false},
    {id: 2, label: 'Make awesome app', important: true},
    {id: 3, label: 'Have a lunch', important: false}
  ];
  return (
    <div className="app">
      <div className="container">
        <AppHeader/> <SearchPanel/> <ItemStatusFilter/> <TodoList todos={todoData}/>
      </div>
    </div>
  )
}
export default App;
