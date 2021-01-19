import React from 'react';
import ListItem from "../ListItem/ListItem";
import './List.scss';

const List = ({list}) => {
  const todoItems = list.map(({id, title, done}) => {
    return (
      <ListItem title={title} done={done} id={id} key={id}>{title}</ListItem>
    );
  });
  return (
    <ul className="list">
      {todoItems}
    </ul>
  );
};
export default List;
