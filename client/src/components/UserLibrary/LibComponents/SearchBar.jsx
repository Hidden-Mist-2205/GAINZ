import React from 'react';
import { useRecoilState } from 'recoil';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useRecoilState(searchBarState);
  return (
    <input
      type="text"
      placeholder="Search"
      className="search-bar"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
}
