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
  const [editProfile, setEditProfile] = React.useState(false);

  const addUserInfo = () => {
    const newUser = {
      userId: Userfront.user.userId,
      username: userInfo.user_name,
      email: userInfo.email,
      zip: userInfo.zip_code,
      phoneNumber: userInfo.phone_num,
      avatar: userInfo.avatar_url,
      goal: userInfo.fitness_goal,
      zoom: userInfo.zoom_profile,
      days: daysAvailable,
    };
    axios.post('/postUser', {
      body: newUser,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

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
    addUserInfo();
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
