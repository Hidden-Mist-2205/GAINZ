import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Userfront from '@userfront/react';

import EditProfileForm from './EditProfileForm';
import ProfileDisplay from './ProfileDisplay';
import ActionButton from '../UserLibrary/Buttons/ActionButton';

export default function Profile() {
  const [userInfo, setUserInfo] = useState({});
  const [daysAvailable, setDaysAvailable] = useState([]);
  const [editProfile, setEditProfile] = React.useState(true);

  useEffect(() => {
    axios
      .get('/getUserInfo', {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${Userfront.tokens.accessToken}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUserInfo(res.data);
        setDaysAvailable(res.data.days || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const setEditButton = () => {
    setEditProfile(!editProfile);
  };
  const saveProfileEdit = () => {
    // POST to db
    setEditProfile(!editProfile);
  };

  return editProfile ? (
    <ProfileContainer>
      <EditProfileForm
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        daysAvailable={daysAvailable}
        setDaysAvailable={setDaysAvailable}
      />
      <ActionButton text="Save Changes" clickHandler={saveProfileEdit} />
    </ProfileContainer>
  ) : (
    <ProfileContainer>
      <ProfileDisplay userInfo={userInfo} />
      <ActionButton text="Edit Profile" clickHandler={setEditButton} />
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
