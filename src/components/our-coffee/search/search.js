import React from "react"
import './search.scss'; 

const Search = (props) => {

  const updateSearchValue = (e) => {
    const value = e.target.value;
    props.updateSearchValue(value);
  }
  return (
    <div className="search">
      <label htmlFor="search">Looking for</label>
      <input 
        id='search' 
        type="text" 
        placeholder="start typing here..."
        onChange={updateSearchValue}
      />
    </div>
  )
};

export default Search;
