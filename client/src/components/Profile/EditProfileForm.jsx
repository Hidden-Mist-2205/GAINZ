import React from 'react';

import { FormContainer, FormFlexColumn } from './Profile.styled';

export default function EditProfileForm({
  editProfileInfo,
  setEditProfileInfo,
  editDaysAvailable,
  setEditDaysAvailable,
}) {
  const handleChange = (e) => {
    if (e.target.checked) {
      setEditDaysAvailable([...editDaysAvailable, e.target.value]);
    } else {
      const freshArray = editDaysAvailable.filter(
        (val) => val !== e.target.value
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
              value={editProfileInfo.username}
              onChange={(e) =>
                setEditProfileInfo({
                  ...editProfileInfo,
                  username: e.target.value,
                })
              }
            />
          </label>

          <label htmlFor="editEmail">
            Email:
            <input
              type="email"
              required
              id="editEmail"
              className="formField"
              value={editProfileInfo.email}
              onChange={(e) =>
                setEditProfileInfo({
                  ...editProfileInfo,
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
              value={editProfileInfo.zipcode}
              onChange={(e) =>
                setEditProfileInfo({
                  ...editProfileInfo,
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
              value={editProfileInfo.phoneNumber}
              onChange={(e) =>
                setEditProfileInfo({
                  ...editProfileInfo,
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
              value={editProfileInfo.zoom}
              onChange={(e) =>
                setEditProfileInfo({ ...editProfileInfo, zoom: e.target.value })
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
              value={editProfileInfo.goal}
              onChange={(e) =>
                setEditProfileInfo({
                  ...editProfileInfo,
                  fitnessGoal: e.target.value,
                })
              }
            />
          </label>
        </FormFlexColumn>

        <FormFlexColumn>
          <fieldset>
            <legend>Days You Work Out</legend>
            <div>
              <label htmlFor="monday">Monday</label>
              <input
                type="checkbox"
                id="monday"
                value="Monday"
                className="formCheckbox"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="tuesday">Tuesday</label>
              <input
                type="checkbox"
                id="tuesday"
                value="Tuesday"
                className="formCheckbox"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="wednesday">Wednesday</label>
              <input
                type="checkbox"
                id="wednesday"
                value="Wednesday"
                className="formCheckbox"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="thursday">Thursday</label>
              <input
                type="checkbox"
                id="thursday"
                value="Thursday"
                className="formCheckbox"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="friday">Friday</label>
              <input
                type="checkbox"
                id="friday"
                value="Friday"
                className="formCheckbox"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="saturday">Saturday</label>
              <input
                type="checkbox"
                id="saturday"
                value="Saturday"
                className="formCheckbox"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="sunday">
                Sunday
                <input
                  type="checkbox"
                  id="sunday"
                  value="Sunday"
                  className="formCheckbox"
                  onChange={(e) => handleChange(e)}
                />
              </label>
            </div>
          </fieldset>
        </FormFlexColumn>
      </FormContainer>
    </form>
  );
}
