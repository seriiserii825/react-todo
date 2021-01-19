import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css'

const TodoList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {
  const elements = todos.map((item) => {
    const {id, done, important, ...itemProps} = item;
    return (
      <TodoListItem{...itemProps}
                   key={id}
                   done={done}
                   important={important}
                   onDeleted={() => onDeleted(id)}
                   onToggleImportant={() => onToggleImportant(id)}
                   onToggleDone={() => onToggleDone(id)}
      />
    );
  });
  return (
    <ul
      className="todo-list list-group"
    > {elements} </ul>
  )
}
export default TodoList;
