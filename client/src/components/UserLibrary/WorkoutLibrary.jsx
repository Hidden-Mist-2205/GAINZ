import React, { useState, useEffect } from 'react';

import PageHeader from './LibComponents/PageHeader';
import PageList from './LibComponents/PageList';
import PageContainer from './Styles/PageContainer.styled';

import { getWorkouts } from '../../requests/requests';

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    getWorkouts()
      .then((res) => setWorkouts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const searchWorkouts = (searchInput) => { console.log(searchInput); };

  return (
    <PageContainer>
      <PageHeader page="Workout Library" searchFunction={searchWorkouts} />
      <PageList items={workouts} actionButton="Start Workout" />
    </PageContainer>
  );
}
