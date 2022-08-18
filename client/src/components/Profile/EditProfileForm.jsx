import React from 'react';

import { FormContainer, FormFlexColumn } from './Profile.styled';
import EditWorkoutDays from './EditWorkoutDays';

export default function EditProfileForm({
  userInfo,
  setUserInfo,
  editDaysAvailable,
  setEditDaysAvailable,
}) {
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setEditDaysAvailable([...editDaysAvailable, e.target.value]);
    } else {
      const freshArray = editDaysAvailable.filter(
        (val) => val !== e.target.value,
      );
      setEditDaysAvailable([...freshArray]);
    }
  };

  return (
    <form>
      <FormContainer>
        <FormFlexColumn>
          <label htmlFor="editUsername">
            Username:
            <input
              type="text"
              required
              id="editUsername"
              className="formField"
              value={userInfo.user_name}
              onChange={(e) => setUserInfo({ ...userInfo, user_name: e.target.value })}
            />
          </label>

          <label htmlFor="editEmail">
            Email:
            <input
              type="email"
              required
              id="editEmail"
              className="formField"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  email: e.target.value,
                })
              }
            />
          </label>

          <label htmlFor="editZip">
            Zipcode:
            <input
              type="numeric"
              pattern="[0-9]*"
              required
              id="editZip"
              className="formField"
              value={userInfo.zipcode}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  zipcode: e.target.value,
                })
              }
            />
          </label>

          <label htmlFor="editTel">
            Phone Number:
            <input
              type="tel"
              required
              id="editTel"
              className="formField"
              value={userInfo.phoneNumber}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  phoneNumber: e.target.value,
                })
              }
            />
          </label>

          <label htmlFor="editTel">
            Zoom:
            <input
              type="text"
              required
              id="editZoom"
              className="formField"
              value={userInfo.zoom}
              onChange={(e) =>
                setUserInfo({ ...userInfo, zoom: e.target.value })
              }
            />
          </label>

          <label htmlFor="editGoal">
            Fitness Goal:
            <input
              type="text"
              required
              id="editGoal"
              className="formField"
              value={userInfo.goal}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  fitnessGoal: e.target.value,
                })
              }
            />
          </label>
        </FormFlexColumn>

        <EditWorkoutDays userDays={userInfo.days} handleChange={handleCheckboxChange}/>
      </FormContainer>
    </form>
  );
}
