import React from 'react';
import './ListItem.scss';

const ListItem = ({id, title, done, onRemoveItem}) => {
  let classNames = 'list__item';
  if (done) {
    classNames += ' checked';
  }
  return (
    <li className={classNames}>
      <span>{title}</span> <span className="close" onClick={() => onRemoveItem(id)}>x</span>
    </li>
  );
};
export default ListItem;
