import React, { useState, useEffect } from 'react';

import WorkoutListItem from './LibComponents/WorkoutListItem';

import { getWorkouts } from '../../requests/server';
import Container from '../styles/ContainerStyles/Container_style';
import GS from '../styles/GeneralStyles';

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [[start, end, pageNumber], setPoints] = useState([0, 4, 1]);
  const page = (e) => (
    e.target.name === 'forward' ? setPoints([start + 4, end + 4, pageNumber + 1]) : setPoints([start - 4, end - 4, pageNumber - 1])
  );

  useEffect(() => {
    getWorkouts()
      .then((res) => setWorkouts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const searchWorkouts = (e, searchTerm) => {
    e.preventDefault();
    const filteredWorkouts = workouts.filter(workout => workout.name.includes(searchTerm));
    setPoints([0, 4, 1]);
    setWorkouts(filteredWorkouts);
  };

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
        {(workouts || []).slice(start, end).map((workout) => (
          <WorkoutListItem data={workout} key={workout.id} />
        ))}
        {workouts.length >= 4 && (
          <Container.NavBtn>
            {start !== 0 && (
              <Container.Previous onClick={page}>{'<'}</Container.Previous>
            )}
            <Container.PageNumber>{pageNumber}</Container.PageNumber>
            {end <= workouts.length
              ? <Container.Next name="forward" onClick={page}>{'>'}</Container.Next>
              : <Container.Next />}
          </Container.NavBtn>
        )}
      </Container.WOBody>
    </>
  );
}
