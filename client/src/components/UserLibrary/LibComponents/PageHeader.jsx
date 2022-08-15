import React from 'react';

import PageHeading from './PageHeading';
import SearchBar from './SearchBar';

import {
  SearchButton,
} from '../Buttons/button_index';

export default function PageHeader({ page }) {
  return (
    <>
      <PageHeading text={`${page} Library`} />
      <SearchBar />
      <SearchButton handleClick={() => {}} />
    </>
  );
}
