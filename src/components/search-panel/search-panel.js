import React from "react";
import './search-panel.css';

export default class SearchPanel extends React.Component {
  state = {
    inputValue: ''
  }
  onInputType = (e) => {
    const term = e.target.value;
    this.setState({
      inputValue: term
    });
    this.props.onSearch(term);
  }
  
  render () {
    const searchText = 'Type here to search for me';
    return (
      <input
        className="search-panel"
        type="text"
        placeholder={searchText}
        value={this.state.inputValue}
        onChange={this.onInputType}
      />
    )
  }
}
