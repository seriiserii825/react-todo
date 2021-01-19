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
    ]
  };
  
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
  
  render () {
    console.log(this.state);
    return (
      <div className="app">
        <Header/>
        <hr/>
        <List list={this.state.todoItems}/>
        <hr/>
        <AddItem onAdd={this.onAddItem}/>
      </div>
    );
  }
}
export default App;
