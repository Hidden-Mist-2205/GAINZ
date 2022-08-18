import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Userfront from '@userfront/react';

import PageHeader from '../UserLibrary/LibComponents/PageHeader';
import PageList from '../UserLibrary/LibComponents/PageList';
import PageContainer from '../UserLibrary/Styles/PageContainer.styled';
import BuddyList from './BuddyList';

//import { getBuddies } from '../../requests/server';
Userfront.init('rbvr4mqb');

export default function FindWorkoutBuddy() {
  const [buddies, setBuddies] = useState([]);
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [localOnly, setLocalOnly] = useState(false);
  const [userZipCode, setUserZipcode] = useState()

  useEffect(() => {
    async function getUserZipcode() {
      const userData = await axios.get('/getAllUserInfo', {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${Userfront.tokens.accessToken}`,
        },
      });
      setUserZipcode(userData.data.zip_code);
    }
    getUserZipcode();
  }, []);

  const searchBuddies = (searchInput) => { console.log(searchInput); };

  const getFilteredBuddies = async e => {
    e.preventDefault();
    if (localOnly && userZipCode) {
      const buddieList = await axios.get(`/getAvailableBuddies?day=${selectedDay}&zipCode=${userZipCode}`, {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${Userfront.tokens.accessToken}`,
        },
      });
      if (buddieList.data.length === 0) {
        alert('No available buddies in your area');
        return;
      }
      setBuddies(buddieList.data);
      return;
    }
    if (localOnly) {
      alert('You have no zipcode in your profile.');
      return;
    }
    const buddieList = await axios.get(`/getAvailableBuddies?day=${selectedDay}`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Userfront.tokens.accessToken}`,
      },
    });
    setBuddies(buddieList.data);
  };

  return (
    <>
      <PageHeader page="Find Workout Buddy" searchFunction={searchBuddies} />
      <PageContainer>
        <form style={{display: 'flex', justifyContent: 'center', gap: '1%'}} onSubmit={getFilteredBuddies}>
          <select name="days" onChange={e => setSelectedDay(e.target.value)}>
            <option required>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
          <label>Local Only
            <input type="checkbox" onChange={() => setLocalOnly(!localOnly)} />
          </label>
          <button type="submit">Find Buddies</button>
        </form>
        {/* <PageList items={buddies} actionButton="Request Info" /> */}
        <BuddyList items={buddies} actionButton="Request Info" />
      </PageContainer>
    </>
  );
}
