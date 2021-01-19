import React from 'react';
import './FilterItems.scss';

const FilterItems = () => {
  return (
    <div className="filter-items">
      <button className="btn active">All</button>
      <button className="btn">Done</button>
      <button className="btn">Undone</button>
    </div>
  );
};
export default FilterItems;
