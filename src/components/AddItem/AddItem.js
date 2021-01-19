import React from 'react';
import './AddItem.scss';

export default class AddItem extends React.Component {
  state = {
    inputValue: ''
  }
  setInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };
  submitTodo = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.inputValue)
    this.setState({
      inputValue: ''
    });
  }
  
  render () {
    return (
      <form className="add-item" onSubmit={this.submitTodo}>
        <h2>Add new todo</h2>
        <div className="add-item__wrap">
          <input
            type="text"
            placeholder="Type to search..."
            onChange={this.setInputValue}
            value={this.state.inputValue}
          />
          <button className="btn">Add new todo</button>
        </div>
      </form>
    );
  }
}
