import React from "react";
import AppHeader from "../app-header/app-header";
import TodoList from "../todo-list/todo-list";
import AddTodo from "../add-todo/add-todo";
import './app.scss';

export default class App extends React.Component {
  state = {
    todoData: [
      this.createItem('First app'),
      this.createItem('Wordpress is good'),
      this.createItem('My first app')
    ],
    term: '',
    filter: 'all'
  }
  
  createItem (text) {
    const id = Math.floor(Math.random() * 100000);
    return {id, label: text, important: false, done: false};
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
  addItem = (text) => {
    const item = this.createItem(text);
    this.setState(({todoData}) => {
      const newArr = [...todoData, item];
      return {
        todoData: newArr
      }
    });
  }
  
  setProperty (arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }
  
  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.setProperty(todoData, id, 'done')
      };
    });
  }
  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.setProperty(todoData, id, 'important')
      };
    });
  }
  onSearch = (value) => {
    this.setState({
      term: value
    });
  }
  search = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter(el => el.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
  }
  onChangeFilter = (cls) => {
    this.setState({
      filter: cls
    });
  }
  
  filterTodo (arr, filter) {
    switch (filter) {
      case  'all':
        return arr;
      case 'active':
        return arr.filter(item => !item.done);
      case 'done':
        return arr.filter(item => item.done);
      default:
        return arr;
    }
  }
  
  render () {
    const {todoData, term, filter} = this.state;
    const doneCount = todoData.filter(item => item.done).length;
    const todoCount = todoData.length - doneCount;
    const visibleItems = this.filterTodo(this.search(todoData, term), filter);
    return (
      <div className="app">
        <AppHeader
          todo={todoCount}
          done={doneCount}
          onSearch={this.onSearch}
          filter={this.state.filter}
          onChangeFilter={this.onChangeFilter}
        />
        <hr/>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <hr/>
        <AddTodo onAdd={this.addItem}/>
      </div>
    )
  }
}
