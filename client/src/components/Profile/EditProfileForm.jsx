import React from 'react';

import { FormContainer, FormFlexColumn } from './Profile.styled';
import EditWorkoutDays from './EditWorkoutDays';

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

  return (
    <form>
      <FormContainer>
        <FormFlexColumn>
          <label htmlFor="editUsername">Username:</label>
          <label htmlFor="editEmail">Email:</label>
          <label htmlFor="editZip">Zipcode:</label>
          <label htmlFor="editTel">Phone Number:</label>
          <label htmlFor="editTel">Zoom:</label>
          <label htmlFor="editGoal">Fitness Goal:</label>
        </FormFlexColumn>

        <FormFlexColumn>
          <input
            type="text"
            id="editUsername"
            required
            className="formField"
            value={userInfo.user_name}
            onChange={(e) => setUserInfo({ ...userInfo, user_name: e.target.value })}
          />
          <input
            type="email"
            required
            id="editEmail"
            className="formField"
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          />
          <input
            type="numeric"
            pattern="[0-9]*"
            required
            id="editZip"
            className="formField"
            value={userInfo.zip_code}
            onChange={(e) => setUserInfo({ ...userInfo, zip_code: e.target.value })}
          />
          <input
            type="tel"
            required
            id="editTel"
            className="formField"
            value={userInfo.phone_num}
            onChange={(e) => setUserInfo({ ...userInfo, phone_num: e.target.value })}
          />
          <input
            type="text"
            required
            id="editZoom"
            className="formField"
            value={userInfo.zoom_profile}
            onChange={(e) => setUserInfo({ ...userInfo, zoom_profile: e.target.value })}
          />
          <input
            type="text"
            required
            id="editGoal"
            className="formField"
            value={userInfo.fitness_goal}
            onChange={(e) => setUserInfo({ ...userInfo, fitness_goal: e.target.value })}
          />
        </FormFlexColumn>
        <EditWorkoutDays
          daysAvailable={daysAvailable}
          handleChange={handleCheckboxChange}
        />
      </FormContainer>
    </form>
  );
}
