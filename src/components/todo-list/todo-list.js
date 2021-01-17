import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css'

const TodoList = ({todos}) => {
  const elements = todos.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <TodoListItem {...itemProps} key={id}/>
    );
  });
  return (
    <ul className="todo-list list-group"> {elements} </ul>
  )
}
export default TodoList;
