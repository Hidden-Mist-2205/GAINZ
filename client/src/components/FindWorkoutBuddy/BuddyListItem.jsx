import React, { useState } from 'react';
import styled from 'styled-components';
import Userfront from '@userfront/react';
import ActionButton from '../UserLibrary/Buttons/ActionButton';
import FavoriteButton from '../UserLibrary/Buttons/FavoriteButton';
import PageItemDropdown from '../UserLibrary/LibComponents/PageItemDropdown';
import PageItemName from '../UserLibrary/LibComponents/PageItemName';
import FlexContainer from '../UserLibrary/Styles/FlexContainer.styled';

//import PageItemName from './PageItemName';
import PageItemCategory from '../UserLibrary/LibComponents/PageItemCategory';
import PageItemDescription from '../UserLibrary/LibComponents/PageItemDescription';
import axios from 'axios';
//import PageItemDropdown from './PageItemDropdown';
//import { FavoriteButton, ActionButton } from '../Buttons/button_index';

//import FlexContainer from '../Styles/FlexContainer.styled';

Userfront.init('rbvr4mqb');

export default function BuddyListItem({ data, actionButton }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const onKeyPressHandler = (e) => {
    e.preventDefault();
  };
  const sendRequest = async () => {
    try {
      const response = await axios.post('/sendRequest', { toUser: data.user_id }, {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${Userfront.tokens.accessToken}`,
        },
      });
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <PageItem /*onClick={() => setShowDropdown(!showDropdown)} role="button" tabIndex={0} onKeyPress={onKeyPressHandler}*/>
        <FavoriteButton />
        <PageItemName text={data.user_name} />
        <PageItemCategory text={data?.zip_code} />
        <PageItemDescription text={data?.fitness_goal} />
        {actionButton && <ActionButton text={actionButton} clickHandler={sendRequest} />}
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
