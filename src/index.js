import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = () => {
  return (
    <div>
      <AppHeader/> <SearchPanel/> <TodoList/>
    </div>
  )
}
const TodoList = () => {
  const items = ['Learn React 3', 'Build Awesome App', 'First React App'];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
    </ul>
  )
}
const AppHeader = () => {
  return (
    <h1>My todo List</h1>
  )
}
const SearchPanel = () => {
  const searchText = 'Type here to search';
  return (
    <input className="some" type="text" placeholder={searchText}/>
  )
}
ReactDOM.render(
  <React.StrictMode> {
    <App/>
  }</React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
