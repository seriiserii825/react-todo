import React from "react";
import './add-todo.scss';

export default class AddTodo extends React.Component {
  state = {
    label: ''
  };
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({
      label: ''
    });
  }
  
  render () {
    return (
      <form className="add-todo" onSubmit={this.onSubmit}>
        <input
          type="text"
          onChange={this.onLabelChange}
          placeholder="Ad new task todo..."
          value={this.state.label}
        />
        <button className="btn btn-primary">Add todo</button>
      </form>
    )
  }
}
