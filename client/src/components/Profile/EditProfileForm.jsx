import React, { useState } from 'react';
import styled from 'styled-components';

export default function EditProfileForm() {
  const [editProfileInfo, setEditProfileInfo] = useState({
    username: '',
    email: '',
    zipcode: 0,
    telephone: 0,
    zoom: '',
    fitnessGoal: '',
  });
  const [editDaysAvailable, setEditDaysAvailable] = useState([]);

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
              onChange={(e) => setEditProfileInfo({ ...editProfileInfo, username: e.target.value})}
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
              onChange={(e) => setEditProfileInfo({ ...editProfileInfo, email: e.target.value})}
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
              onChange={(e) => setEditProfileInfo({ ...editProfileInfo, zipcode: e.target.value})}
            />
          </label>

          <label htmlFor="editTel">
            Telephone Number:
            <input
              type="tel"
              required
              id="editTel"
              className="formField"
              value={editProfileInfo.telephone}
              onChange={(e) => setEditProfileInfo({ ...editProfileInfo, telephone: e.target.value})}
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
              onChange={(e) => setEditProfileInfo({ ...editProfileInfo, zoom: e.target.value})}
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
              onChange={(e) => setEditProfileInfo({ ...editProfileInfo, fitnessGoal: e.target.value})}
            />
          </label>
        </FormFlexColumn>

        <FormFlexColumn>
          <fieldset>
            <legend>Days You Work Out</legend>
            <div>
              <label htmlFor="monday">Monday</label>
              <input type="checkbox" id="monday" className="formCheckbox" />
            </div>
            <div>
              <label htmlFor="tuesday">Tuesday</label>
              <input type="checkbox" id="tuesday" className="formCheckbox" />
            </div>
            <div>
              <label htmlFor="wednesday">Wednesday</label>
              <input type="checkbox" id="wednesday" className="formCheckbox" />
            </div>
            <div>
              <label htmlFor="thursday">Thursday</label>
              <input type="checkbox" id="thursday" className="formCheckbox" />
            </div>
            <div>
              <label htmlFor="friday">Friday</label>
              <input type="checkbox" id="friday" className="formCheckbox" />
            </div>
            <div>
              <label htmlFor="saturday">Saturday</label>
              <input
                type="checkbox"
                id="saturday"
                name="saturday"
                className="formCheckbox"
              />
            </div>
            <div>
              <label htmlFor="sunday">
                Sunday
                <input
                  type="checkbox"
                  id="sunday"
                  name="sunday"
                  className="formCheckbox"
                />
              </label>
            </div>
          </fieldset>
        </FormFlexColumn>
      </FormContainer>
    </form>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FormFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
