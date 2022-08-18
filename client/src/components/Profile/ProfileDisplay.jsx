import React from 'react';

import ProfileText from './ProfileText';
import WorkoutDays from './WorkoutDays';
import { ProfileContainer, FormFlexColumn } from './Profile.styled';

export default function ProfileDisplay({ userInfo }) {
  return (
    <ProfileContainer>
      <FormFlexColumn>
        <h3>Your Profile:</h3>
        <div id="profileImage">
          <img src={userInfo.image} alt="profile" />
        </div>
        <ProfileText text={userInfo.user_name} />
        <ProfileText text={userInfo.email} />
        <ProfileText text={userInfo.phone_num} />
        <ProfileText text={userInfo.zip_code} />
        <ProfileText text={userInfo.fitness_goal} />
        <ProfileText text={userInfo.zoom_profile} />
      </FormFlexColumn>
      <FormFlexColumn>
        <WorkoutDays days={userInfo.days} />
      </FormFlexColumn>
    </ProfileContainer>
  );
}
