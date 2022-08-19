import React from 'react';

import ProfileText from './ProfileText';
import WorkoutDays from './WorkoutDays';
import ProfileImage from './ProfileImage';
import {
  ProfileContainer,
  FormFlexColumn,
} from './Profile.styled';

export default function ProfileDisplay({ userInfo }) {
  return (
    <ProfileContainer>
      <FormFlexColumn>
        {/* <h3>Your Profile:</h3> */}
        <ProfileImage image={userInfo.avatar_url} />
        <ProfileText label="Username" text={userInfo.user_name} />
        <ProfileText label="Email" text={userInfo.email} />
        <ProfileText label="Phone Number" text={userInfo.phone_num} />
        <ProfileText label="Zipcode" text={userInfo.zip_code} />
        <ProfileText label="Fitness Goal" text={userInfo.fitness_goal} />
        <ProfileText label="Zoom" text={userInfo.zoom_profile} />
      </FormFlexColumn>
      <FormFlexColumn>
        <WorkoutDays days={userInfo.days} />
      </FormFlexColumn>
    </ProfileContainer>
  );
}
