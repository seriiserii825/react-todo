import React from "react";
import './app-header.scss';
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";

const AppHeader = ({todo, done, onSearch, filter, onChangeFilter}) => {
  return (
    <div className="app-header">
      <header>
        <h1>Todo list</h1>
        <span><strong>{todo}</strong> more to do, <strong>{done}</strong> done</span>
      </header>
      <div className="app-header__wrap">
        <SearchPanel onSearch={onSearch}/>
        <hr/>
        <ItemStatusFilter onChangeFilter={onChangeFilter} filter={filter}/>
      </div>
    </div>
  )
}
export default AppHeader;
