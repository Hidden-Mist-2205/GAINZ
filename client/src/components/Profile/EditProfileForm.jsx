import React from 'react';

import { ProfileContainer, FormFlexColumn, ProfileFormContainer } from './Profile.styled';
import EditWorkoutDays from './EditWorkoutDays';
import FormInputItem from './FormInputItem';

export default function EditProfileForm({
  userInfo,
  setUserInfo,
  daysAvailable,
  setDaysAvailable,
}) {
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setDaysAvailable([...daysAvailable, e.target.value]);
    } else {
      const freshArray = daysAvailable.filter(
        (val) => val !== e.target.value,
      );
      setDaysAvailable([...freshArray]);
    }
  };

  console.log(userInfo);

  const formInputs = [
    ['Username', 'user_name', 'text'],
    ['Email', 'email', 'email'],
    ['Zipcode', 'zip_code', 'text'],
    ['Phone Number', 'phone_num', 'tel'],
    ['Fitness Goal', 'fitness_goal', 'text'],
    ['Zoom', 'zoom_profile', 'text'],
  ];
  return (
    <ProfileContainer>
      <form>
        <ProfileFormContainer>
          <FormFlexColumn>
            <h3>Edit Your Profile:</h3>
            {formInputs.map((tuple) => (
              <FormInputItem
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                label={tuple[0]}
                property={tuple[1]}
                type={tuple[2]}
              />
            ))}
          </FormFlexColumn>
          <EditWorkoutDays
            daysAvailable={daysAvailable}
            handleChange={handleCheckboxChange}
          />
        </ProfileFormContainer>
      </form>
    </ProfileContainer>
  );
}
