import React, { useState, useEffect } from 'react';

// import PageHeader from './LibComponents/PageHeader';
// import PageList from './LibComponents/PageList';
// import PageContainer from './Styles/PageContainer.styled';
// import SearchBar from './LibComponents/SearchBar';
import PageListItem from './LibComponents/PageListItem';

import { getWorkouts } from '../../requests/server';
import Container from '../styles/ContainerStyles/Container_style';
import GS from '../styles/GeneralStyles';

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    getWorkouts()
      .then((res) => setWorkouts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const searchWorkouts = (searchInput) => { console.log(searchInput); };

  return (
    <>
      <GS.PageHeader> Workout Library </GS.PageHeader>
      <Container.SearchBarContainer>
        <Container.SearchBar
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <GS.Button onClick={searchWorkouts}>Search</GS.Button>
      </Container.SearchBarContainer>
      <Container.WOBody>
        {/* <PageList items={workouts} actionButton="Start Workout" /> */}
        {workouts && workouts.map((workout) => (
          <PageListItem data={workout} key={workout.id} />
        ))}
      </Container.WOBody>
    </>
  );
}
