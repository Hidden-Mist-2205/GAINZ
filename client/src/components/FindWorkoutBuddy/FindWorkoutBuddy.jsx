import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Userfront from '@userfront/react';

import BuddyList from './BuddyList';
import Container from '../styles/ContainerStyles/Container_style';
import GS from '../styles/GeneralStyles';
import M from '../styles/Dashboard_style/Modal';

Userfront.init('rbvr4mqb');

export default function FindWorkoutBuddy() {
  const [buddies, setBuddies] = useState([]);
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [localOnly, setLocalOnly] = useState(false);
  const [userZipCode, setUserZipcode] = useState();
  const [searchTerm, setSearchTerm] = useState();

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

  const searchBuddies = (e, search) => {
    e.preventDefault();
    const filteredResults = buddies.filter(buddy => buddy.user_name.includes(search));
    setBuddies(filteredResults);
  };

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
      <GS.PageHeader>Find Workout Buddy</GS.PageHeader>
      <Container.SearchBarContainer>
        <Container.SearchBar placeholder="Search Buddies" onChange={(e) => setSearchTerm(e.target.value)}/>
        <GS.Button onClick={(e) => searchBuddies(e, searchTerm)}>Search</GS.Button>
      </Container.SearchBarContainer>
      <Container.WOBody>
        <form style={{display: 'flex', justifyContent: 'center', gap: '1%', marginTop: '25px', alignItems: 'center'}} onSubmit={getFilteredBuddies}>
          <M.Select style={{marginBottom: '0px', width: 'auto'}} name="days" onChange={e => setSelectedDay(e.target.value)}>
            <M.Option required>Monday</M.Option>
            <M.Option>Tuesday</M.Option>
            <M.Option>Wednesday</M.Option>
            <M.Option>Thursday</M.Option>
            <M.Option>Friday</M.Option>
            <M.Option>Saturday</M.Option>
            <M.Option>Sunday</M.Option>
          </M.Select>
          <label>Local Only
            <input type="checkbox" onChange={() => setLocalOnly(!localOnly)} />
          </label>
          <button type="submit">Find Buddies</button>
        </form>
        <BuddyList items={buddies} />
      </Container.WOBody>
    </>
  );
}
