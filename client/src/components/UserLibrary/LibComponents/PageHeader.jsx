import React from 'react';
import styled from 'styled-components';

import PageHeading from './PageHeading';
import SearchBar from './SearchBar';
import {
  SearchButton,
} from '../Buttons/button_index';
import FlexContainer from '../Styles/FlexContainer.styled';

export default function PageHeader({ page }) {
  return (
    <FlexContainer>
      <PageHeading text={`${page} Library`} />
      <SearchBar />
      <SearchButton handleClick={() => {}} />
    </FlexContainer>
  );
}

