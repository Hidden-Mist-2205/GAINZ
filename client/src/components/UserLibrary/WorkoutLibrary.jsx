import React, { useState, useEffect } from 'react';

import WorkoutListItem from './LibComponents/WorkoutListItem';

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

  const searchWorkouts = (e, searchTerm) => {
    e.preventDefault();
    const filteredWorkouts = workouts.filter(workout => workout.name.includes(searchTerm));
    setWorkouts(filteredWorkouts);
  };

  console.log(workouts);

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
        <GS.Button onClick={(e) => searchWorkouts(e, searchInput)}>Search</GS.Button>
      </Container.SearchBarContainer>
      <Container.WOBody>
        {workouts && workouts.map((workout) => (
          <WorkoutListItem data={workout} key={workout.id} />
        ))}
      </Container.WOBody>
    </>
  );
}
