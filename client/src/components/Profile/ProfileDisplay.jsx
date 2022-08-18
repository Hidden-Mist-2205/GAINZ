import React from 'react';

import ProfileText from './ProfileText';
import WorkoutDays from './WorkoutDays';
import { FormContainer, FormFlexColumn } from './Profile.styled';

export default function ProfileDisplay({ userInfo }) {
  return (
    <FormContainer>
      <FormFlexColumn>
        <div>
          <img src={userInfo.image} alt="profile" />
        </div>
        <ProfileText text={userInfo.user_name} />
        <ProfileText text={userInfo.email} />
        <ProfileText text={userInfo.phone_num} />
        <ProfileText text={userInfo.zip_code} />
        <ProfileText text={userInfo.fitness_goal} />
      </FormFlexColumn>
      <FormFlexColumn>
        <WorkoutDays days={userInfo.days} />
      </FormFlexColumn>
    </FormContainer>
  );
}
