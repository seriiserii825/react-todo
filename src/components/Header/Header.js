import React from 'react';
import './Header.scss';
import FilterItems from "../FilterItems/FilterItems";

const Header = () => {
  return (
    <div className="header">
      <h2>My list of todos</h2>
      <div className="header__wrap">
        <input type="text" placeholder="Type to search..."/>
        <span className="btn">Search</span>
      </div>
      <FilterItems/>
    </div>
  );
};
export default Header;
