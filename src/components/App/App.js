import React, {Component} from 'react';
import './App.scss';
import Header from '../Header/Header';
import List from "../List/List";
import AddItem from "../AddItem/AddItem";

class App extends Component {
  idCounter = 10
  state = {
    todoItems: [
      this.createTodo('Todo something'),
      this.createTodo('Buy milk'),
      this.createTodo('Buy coffee'),
      this.createTodo('Buy ciocolate'),
      this.createTodo('Buy ice cream')
    ],
    term: ''
  };
  onSearch = (term) => {
    this.setState({term});
  }
  
  createTodo (text) {
    const id = this.idCounter++;
    return {id, title: text, done: false};
  }
  
  onAddItem = (text) => {
    if (text.length === 0) {
      alert('Enter a todo title');
    }
    const newItem = this.createTodo(text);
    this.setState(({todoItems}) => {
      return {
        todoItems: [...this.state.todoItems, newItem]
      };
    });
  }
  onRemoveItem = (id) => {
    const {todoItems} = this.state;
    const idx = todoItems.findIndex(el => el.id === id);
    const newArray = [...todoItems.slice(0, idx), ...todoItems.slice(idx + 1)];
    this.setState(({todoItems}) => {
      return {
        todoItems: newArray
      };
    });
  }
  onToggleDone = (id) => {
    const {todoItems} = this.state;
    const idx = todoItems.findIndex(el => el.id === id);
    const oldItem = todoItems[idx];
    const newArray = [...todoItems.slice(0, idx), {...oldItem, done: !oldItem.done}, ...todoItems.slice(idx + 1)];
    this.setState(({todoItems}) => {
      return {
        todoItems: newArray
      };
    });
  }
  
  search (term) {
    if (term.length === 0) {
      return this.state.todoItems;
    }
    return this.state.todoItems.filter(item => item.title.toLowerCase().indexOf(term.toLowerCase()) > -1);
  }
  
  render () {
    const visibleItems = this.search(this.state.term);
    return (
      <div className="app">
        <Header onSearch={this.onSearch}/>
        <hr/>
        <List onToggleDone={this.onToggleDone} onRemoveItem={this.onRemoveItem} list={visibleItems}/>
        <hr/>
        <AddItem onAdd={this.onAddItem}/>
      </div>
    );
  }
}
export default App;
