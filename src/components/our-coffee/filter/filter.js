import React from "react"

import './filter.scss';

const Filter = (props) => {
  const buttonsData = [
    {name: 'Brazil', label: 'Brazil'},
    {name: 'Kenya', label: 'Kenya'},
    {name: 'Colombia', label: 'Colombia'},
  ];
  const {filter} = props;
  const buttons = buttonsData.map(({name, label}) =>{
    const active = filter === name;
    return (
      <button
        type="button"
        className={`btn-filter btn-${name} ${active ? 'btn-filter-outline' : ''}`}
        onClick={() => props.updateFilter(name)}
      >
        {label}
      </button>
    )
  })
  return (
    <div className="filter">
      <label className="filterLabel">Or filter</label>
      {buttons}
    </div>
  )
};

export default Filter;
