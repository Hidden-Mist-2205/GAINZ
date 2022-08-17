import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Userfront from '@userfront/react';

import EditProfileForm from './EditProfileForm';
import ProfileDisplay from './ProfileDisplay';
import ActionButton from '../UserLibrary/Buttons/ActionButton';

export default function Profile() {
  const [userInfo, setUserInfo] = useState({});
  const [editProfile, setEditProfile] = React.useState(true);
  const [editProfileInfo, setEditProfileInfo] = useState({
    username: '',
    email: '',
    zipcode: '',
    phoneNumber: '',
    zoom: '',
    fitnessGoal: '',
  });
  const [editDaysAvailable, setEditDaysAvailable] = useState([]);

  useEffect(() => {
    axios.get('/getUserInfo', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Userfront.tokens.accessToken}`,
      },
    })
      .then((res) => setUserInfo(res.data));

    console.log(userInfo);
  }, []);
  const setEditButton = () => {
    setEditProfile(!editProfile);
  };
  const saveProfileEdit = () => {
    setEditProfile(!editProfile);
  };

  return editProfile ? (
    <ProfileContainer>
      <EditProfileForm
        editProfileInfo={editProfileInfo}
        setEditProfileInfo={setEditProfileInfo}
        editDaysAvailable={editDaysAvailable}
        setEditDaysAvailable={setEditDaysAvailable}
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
