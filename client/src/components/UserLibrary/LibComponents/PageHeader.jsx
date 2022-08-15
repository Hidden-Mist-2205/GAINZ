import React from 'react';

import {
  PageHeading,
  SearchBar,
} from './lib_index';

import {
  SearchButton,
} from './Buttons/button_index';

export default function PageHeader({ page }) {
  return (
    <>
      <PageHeading text={`${page} Library`} />
      <SearchBar />
      <SearchButton />
    </>
  );
}
