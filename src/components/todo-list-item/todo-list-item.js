import React from "react";
import './todo-list-item.scss';

const TodoListItem = ({label, done, important, onDeleted, onToggleDone, onToggleImportant}) => {
  let classNames = 'list-group-item todo-list-item';
  if (done) {
    classNames += ' done';
  }
  if (important) {
    classNames += ' important';
  }
  return (
    <li className={classNames}>
      <span onClick={onToggleDone} className="todo-list-item__text">{label}</span>
      <button
        className="btn btn--important btn-outline-success"
        onClick={onToggleImportant}
      >
        <i className="fa fa-exclamation"/>
      </button>
      <button
        className="btn btn--delete btn-outline-danger"
        onClick={onDeleted}
      >
        <i className="fa fa-trash"/>
      </button>
    </li>
  )
}
export default TodoListItem;
