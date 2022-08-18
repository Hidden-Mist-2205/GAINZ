/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';

import WorkoutListItem from './LibComponents/WorkoutListItem';

import { getWorkouts } from '../../requests/server';
import Container from '../styles/ContainerStyles/Container_style';
import GS from '../styles/GeneralStyles';

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState([]);
  const [displayedWorkouts, setDisplayedWorkouts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [[start, end, pageNumber], setPoints] = useState([0, 4, 1]);
  const [category, setCategory] = useState('See All');
  const page = (e) => (
    e.target.name === 'forward' ? setPoints([start + 4, end + 4, pageNumber + 1]) : setPoints([start - 4, end - 4, pageNumber - 1])
  );
  const cats = ['See All', 'legs', 'waist', 'arms', 'shoulders', 'chest', 'back'];

  useEffect(() => {
    getWorkouts()
      .then((res) => {
        setWorkouts(res.data);
        setDisplayedWorkouts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchWorkouts = (e, searchTerm) => {
    e.preventDefault();
    setPoints([0, 4, 1]);
    if (searchTerm === '' && category === 'See All') {
      setDisplayedWorkouts(workouts);
      return;
    }
    const filteredWorkouts = workouts.filter(workout => workout.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (category === 'See All') {
      setDisplayedWorkouts(filteredWorkouts);
      return;
    }
    const filterByCategory = filteredWorkouts.filter(workout => workout.main_area.toLowerCase() === category.toLowerCase());
    setDisplayedWorkouts(filterByCategory);
  };

  const handleCategory = (e) => {
    e.preventDefault();
    setPoints([0, 4, 1]);
    setCategory(e.target.value);
    const filteredWorkouts = workouts.filter(workout => workout.name.toLowerCase().includes(searchInput.toLowerCase()));
    if (e.target.value === 'See All') {
      setDisplayedWorkouts(filteredWorkouts);
      return;
    }
    const filterByCategory = filteredWorkouts.filter(workout => workout.main_area.toLowerCase() === e.target.value.toLowerCase());
    setDisplayedWorkouts(filterByCategory);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setPoints([0, 4, 1]);
    setDisplayedWorkouts(workouts);
  };

  return (
    <>
      <GS.PageHeader> Workout Library </GS.PageHeader>
      <Container.SearchBarContainer>
        <GS.Button onClick={handleReset}>Reset</GS.Button>
        <Container.SearchBar
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Container.ChangeCategory onChange={handleCategory}>
          {cats.map((cat) => <option key={cat} value={cat} label={cat} />)}
        </Container.ChangeCategory>
        <GS.Button onClick={(e) => searchWorkouts(e, searchInput)}>Search</GS.Button>
      </Container.SearchBarContainer>
      <Container.WOBody>
        {displayedWorkouts.length > 0 ? (displayedWorkouts.slice(start, end).map((workout) => (
          <WorkoutListItem data={workout} key={workout.id} />
        )))
          : (
            <Container.WOItem>
              <Container.NoWorkouts>
                No workouts found. Try another search!
              </Container.NoWorkouts>
            </Container.WOItem>
          )}
        {displayedWorkouts.length > 4 && (
          <Container.NavBtn>
            {start !== 0 && (
              <Container.Previous onClick={page}>{'<'}</Container.Previous>
            )}
            <Container.PageNumber>{pageNumber}</Container.PageNumber>
            {end < displayedWorkouts.length
              ? <Container.Next name="forward" onClick={page}>{'>'}</Container.Next>
              : <Container.Next />}
          </Container.NavBtn>
        )}
      </Container.WOBody>
    </>
  );
}
