import React from 'react';

import ProfileText from './ProfileText';
import UserWorkoutDays from './UserWorkoutDays';
import { FormContainer, FormFlexColumn } from './Profile.styled';

export default function ProfileDisplay({ userInfo }) {
  return (
    <FormContainer>
      <FormFlexColumn>
        <img src={userInfo.image} alt="profile" />
        <ProfileText text={userInfo.user_name} />
        <ProfileText text={userInfo.email} />
        <ProfileText text={userInfo.phoneNumber} />
        <ProfileText text={userInfo.zipcode} />
        <ProfileText text={userInfo.fitnessGoal} />
      </FormFlexColumn>
      <FormFlexColumn>
        <UserWorkoutDays days={userInfo.daysAvailable} />
      </FormFlexColumn>
    </FormContainer>
  );
}
