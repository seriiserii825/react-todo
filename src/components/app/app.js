import React from "react";
import AppHeader from "../app-header/app-header";
import TodoList from "../todo-list/todo-list";
import './app.scss';

export default class App extends React.Component {
  state = {
    todoData: [
      {id: 1, label: 'Drink coffee', important: false},
      {id: 2, label: 'Make awesome app', important: true},
      {id: 3, label: 'Have a lunch', important: false}
    ]
  }
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const result = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: result
      };
    });
  }
  
  render () {
    return (
      <div className="app">
        <AppHeader todo={3} done={2}/> <TodoList
        todos={this.state.todoData}
        onDeleted={this.deleteItem}
      />
      </div>
    )
  }
}
