import React from "react";
import './todo-list-item.css';

const TodoListItem = ({label, important = false}) => {
  const spanStyle = {
    color: important ? 'tomato' : 'initial'
  }
  return (
    <span className="todo-list-item">
      <span style={spanStyle}>{label}</span>
      <button className="btn btn-outline-success">
        <i className="fa fa-exclamation"/>
      </button>
      <button className="btn btn-outline-danger">
        <i className="fa fa-trash"/>
      </button>
    </span>
  )
};
export default TodoListItem;
