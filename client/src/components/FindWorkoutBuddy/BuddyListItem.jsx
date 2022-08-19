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
      <div style={{height: '70px', width: '70px', display: 'flex', alignItems: 'center'}}>
        <img style={{maxHeight: '100%', maxWidth: '100%', borderRadius: '10%'}} alt="profile" src={data.avatar_url ? data.avatar_url : 'https://thumbs.dreamstime.com/t/profile-placeholder-image-gray-silhouette-no-photo-person-avatar-default-pic-used-web-design-profile-123478439.jpg'}/>
      </div>
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
