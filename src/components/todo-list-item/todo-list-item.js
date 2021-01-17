import React from "react";
import './todo-list-item.scss';

class TodoListItem extends React.Component {
  render () {
    const {label, important = false} = this.props;
    const liStyleColor = important ? 'tomato' : 'initial';
    const liStyle = {'color': liStyleColor};
    return (
      <li className="list-group-item todo-list-item">
        <span className="todo-list-item" style={liStyle}>{label}</span>
        <button className="btn btn--important btn-outline-success">
          <i className="fa fa-exclamation"/>
        </button>
        <button className="btn btn--delete btn-outline-danger">
          <i className="fa fa-trash"/>
        </button>
      </li>
    )
  }
}
export default TodoListItem;
