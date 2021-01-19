import React from 'react';
import './AddItem.scss';

const AddItem = () => {
  return (
    <div className="add-item">
      <h2>Add new todo</h2>
      <div className="add-item__wrap">
        <input type="text" placeholder="Type to search..."/>
        <span className="btn">Search</span>
      </div>
    </div>
  );
};
export default AddItem;
