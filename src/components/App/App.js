import React, {Component} from 'react';
import './App.scss';
import Header from '../Header/Header';
import List from "../List/List";
import AddItem from "../AddItem/AddItem";

class App extends Component {
  state = {
    todoItems: [
      {id: 1, title: 'To do something', done: false},
      {id: 2, title: 'Buy eggs', done: false},
      {id: 3, title: 'Buy milk', done: false},
      {id: 4, title: 'Buy coffee', done: true},
      {id: 5, title: 'Buy bread', done: false}
    ]
  };
  render () {
    return (
      <div className="app">
        <Header/>
        <List list={this.state.todoItems}/>
        <AddItem/>
      </div>
    );
  }
}
export default App;
