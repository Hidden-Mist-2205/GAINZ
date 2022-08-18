import React, { useState, useEffect } from 'react';

import PageHeader from './LibComponents/PageHeader';
import PageList from './LibComponents/PageList';
import PageContainer from './Styles/PageContainer.styled';

import { getWorkouts } from '../../requests/server';

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    getWorkouts()
      .then((res) => setWorkouts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const searchWorkouts = (searchInput) => {
    const filteredWorkouts = workouts.filter(workout => workout.name.includes(searchInput));
    setWorkouts(filteredWorkouts);
  };

  return (
    <>
      <PageHeader page="Workout Library" searchFunction={searchWorkouts} />
      <PageContainer>
        <PageList items={workouts} actionButton="Start Workout" />
      </PageContainer>
    </>
  );
}
