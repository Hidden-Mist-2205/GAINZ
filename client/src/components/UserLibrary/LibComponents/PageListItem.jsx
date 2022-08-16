import React, { useState } from 'react';

import PageItemName from './PageItemName';
import PageItemCategory from './PageItemCategory';
import PageItemDescription from './PageItemDescription';
import PageItemDropdown from './PageItemDropdown';
import { FavoriteButton, StartWorkoutButton } from '../Buttons/button_index';

import FlexContainer from '../Styles/FlexContainer.styled';

export default function PageListItem({ data }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const onKeyPressHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <FlexContainer onClick={() => setShowDropdown(!showDropdown)} role="button" tabIndex={0} onKeyPress={onKeyPressHandler}>
        <FavoriteButton />
        <PageItemName text={data.name} />
        <PageItemCategory text={data.category} />
        <PageItemDescription text={data.description} />
        <StartWorkoutButton />
      </FlexContainer>
      {showDropdown && <PageItemDropdown />}
    </>
  );
}
