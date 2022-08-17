import React from 'react';
import styled from 'styled-components';

import EditProfileForm from './EditProfileForm';
import ProfileDisplay from './ProfileDisplay';
import ActionButton from '../UserLibrary/Buttons/ActionButton';

export default function Profile() {
  const [editProfile, setEditProfile] = React.useState(true);

  const handleEditButton = () => {
    setEditProfile(!editProfile);
  };
  const handleSaveButton = () => {
    setEditProfile(!editProfile);
  };

  return editProfile ? (
    <ProfileContainer>
      <EditProfileForm />
      <ActionButton text="Save Changes" clickHandler={handleSaveButton} />
    </ProfileContainer>
  ) : (
    <ProfileContainer>
      <ProfileDisplay />
      <ActionButton text="Edit Profile" clickHandler={handleEditButton} />
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
