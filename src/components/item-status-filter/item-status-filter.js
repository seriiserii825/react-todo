import React from "react";
import './item-status-filter.scss';

export default class ItemStatusFilter extends React.Component {
  buttons = [
    {cls: 'all', label: 'All'},
    {cls: 'active', label: 'Active'},
    {cls: 'done', label: 'Done'}
  ];
  
  render () {
    const {filter} = this.props;
    const buttons = this.buttons.map(({cls, label}) => {
      const clazz = filter === cls ? 'btn-info' : 'btn-light';
      return (
        <button
          className={`btn ${clazz}`}
          key={cls}
          onClick={() => this.props.onChangeFilter(cls)}
        >
          {label}
        </button>
      );
    });
    return (
      <div className="btn-group item-status-filter">
        {buttons}
      </div>
    );
  }
}
