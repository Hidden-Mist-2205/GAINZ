import React from 'react';

export default function SearchBar({ controlledValue, changeHandler }) {
  return (
    <input
      type="search"
      placeholder="Search"
      className="searchBar"
      value={controlledValue}
      onChange={(e) => changeHandler(e.target.value)}
    />
  );
}
