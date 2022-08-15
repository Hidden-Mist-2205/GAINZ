import React, { useState } from 'react';

import PageItemName from './PageItemName';
import PageItemCategory from './PageItemCategory';
import PageItemDescription from './PageItemDescription';
import PageItemDropdown from './PageItemDropdown';

import { FavoriteButton, StartWorkoutButton } from '../Buttons/button_index';

export default function PageListItem() {
  const [showDropdown, setShowDropdown] = useState(false);
  const onKeyPressHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div onClick={() => setShowDropdown(!showDropdown)} role="button" tabIndex={0} onKeyPress={onKeyPressHandler}>
      <FavoriteButton />
      <PageItemName />
      <PageItemCategory />
      <PageItemDescription />
      {showDropdown && <PageItemDropdown />}
      <StartWorkoutButton />
    </div>
  );
}
