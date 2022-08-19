import React, { useState } from 'react';
import Userfront from '@userfront/react';
import axios from 'axios';
import ActionButton from '../UserLibrary/Buttons/ActionButton';
import Container from '../styles/ContainerStyles/Container_style';

Userfront.init('rbvr4mqb');

export default function BuddyListItem({ data }) {
  const [actionButton, setActionButton] = useState('Request Info');
  const sendRequest = async () => {
    setActionButton('Sending');
    try {
      const response = await axios.post('/sendRequest', { toUser: data.user_id }, {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${Userfront.tokens.accessToken}`,
        },
      });
      setActionButton('Request Sent!');
      return response;
    } catch (error) {
      console.error(error);
      setActionButton('Send Error');
    }
  };
  return (
    <Container.WOItem>
      <Container.WOName>
        {data.user_name}
      </Container.WOName>
      <Container.WOCategory>
        {data.zip_code}
      </Container.WOCategory>
      <Container.WODescription>{data.fitness_goal}</Container.WODescription>
      {actionButton && <ActionButton text={actionButton} clickHandler={sendRequest} />}
    </Container.WOItem>
  );
}
