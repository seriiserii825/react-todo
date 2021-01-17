import React from "react";
import './add-todo.scss';

const AddTodo = ({onAdd}) => {
  return (
    <div className="add-todo">
      <button onClick={() => onAdd('hello world')} className="btn btn-primary">Add todo</button>
    </div>
  )
}
export default AddTodo;
