import React from "react";
import './todo-list-item.scss';

export default class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false
  };
  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done
      };
    });
  }
  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important
      };
    });
  }
  
  render () {
    const {label} = this.props;
    const {done, important} = this.state;
    let classNames = 'list-group-item todo-list-item';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }
    return (
      <li className={classNames}>
        <span onClick={this.onLabelClick} className="todo-list-item__text">{label}</span>
        <button
          className="btn btn--important btn-outline-success"
          onClick={this.onMarkImportant}
        >
          <i className="fa fa-exclamation"/>
        </button>
        <button
          className="btn btn--delete btn-outline-danger"
        >
          <i className="fa fa-trash"/>
        </button>
      </li>
    )
  }
}
