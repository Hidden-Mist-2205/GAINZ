import React, { useState } from 'react';
import PageHeading from './PageHeading';
import SearchBar from './SearchBar';
import { SearchButton } from '../Buttons/button_index';
import FlexContainer from '../Styles/FlexContainer.styled';

export default function PageHeader({ page, searchFunction }) {
  const [searchInput, setSearchInput] = useState('');
  function handleSearch() {
    searchFunction(searchInput);
  }
  return (
    <FlexContainer>
      <PageHeading text={page} />
      <SearchBar controlledValue={searchInput} changeHandler={setSearchInput} />
      <SearchButton handleClick={handleSearch} />
    </FlexContainer>
  );
}
