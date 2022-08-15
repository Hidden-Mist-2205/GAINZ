import React from 'react';
import { useRecoilState } from 'recoil';

import { exerciseSearchState } from '../atoms';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useRecoilState(exerciseSearchState);
  return (
    <input
      type="text"
      placeholder="Search"
      className="searchBar"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
}
