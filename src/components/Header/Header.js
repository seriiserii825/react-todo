import React from 'react';
import './Header.scss';
import FilterItems from "../FilterItems/FilterItems";

export default class Header extends React.Component {
  state = {
    term: ''
  }
  onType = (e) => {
    this.setState({
      term: e.target.value
    });
    this.props.onSearch(e.target.value);
  }
  
  render () {
    return (
      <div className="header">
        <h2>My list of todos</h2>
        <div className="header__wrap">
          <input onChange={this.onType} type="text" placeholder="Type to search..." value={this.state.term}/>
          <span className="btn">Search</span>
        </div>
        <FilterItems/>
      </div>
    );
  }
}
