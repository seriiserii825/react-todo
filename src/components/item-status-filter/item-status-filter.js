import React from "react";
import './item-status-filter.scss';

export default class ItemStatusFilter extends React.Component {
  render () {
    return (
      <div className="btn-group item-status-filter">
        <button className="btn btn-info btn--active">All</button>
        <button className="btn btn-outline-secondary">Active</button>
        <button className="btn btn-outline-secondary">Done</button>
      </div>
    );
  }
}
