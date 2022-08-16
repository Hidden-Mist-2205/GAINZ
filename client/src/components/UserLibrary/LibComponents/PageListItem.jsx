import React, { useState } from 'react';
import styled from 'styled-components';

import PageItemName from './PageItemName';
import PageItemCategory from './PageItemCategory';
import PageItemDescription from './PageItemDescription';
import PageItemDropdown from './PageItemDropdown';
import { FavoriteButton, ActionButton } from '../Buttons/button_index';

import MG from '../../styles/MyGainz_style/MG';
import FlexContainer from '../Styles/FlexContainer.styled';

export default function PageListItem({ data, actionButton }) {
  const [favorite, setFavorite] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const onKeyPressHandler = (e) => {
    e.preventDefault();
  };
  const handleFavorite = (e) => {
    e.preventDefault();
    setFavorite(!favorite);
  };
  return (
    <>
      <PageItem onClick={() => setShowDropdown(!showDropdown)} role="button" tabIndex={0} onKeyPress={onKeyPressHandler}>
        <FavoriteButton clickHandler={handleFavorite} />
        <PageItemName text={data.name} />
        <PageItemCategory text={data.category} />
        <PageItemDescription text={data.description} />
        {actionButton && <ActionButton text={actionButton} />}
      </PageItem>
      {showDropdown && <PageItemDropdown />}
    </>
  );
}

const PageItem = styled(FlexContainer)`
  width: 95%;
  height: 100px;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-right: auto;
  margin-left: auto;
  border-radius: 5px;
  background-color: #272727;
`;
