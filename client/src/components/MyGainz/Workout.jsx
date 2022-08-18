/* eslint-disable max-len */
import React from 'react';
import { useRecoilValue } from 'recoil';
import { pageState } from './workoutsAtom';
import Container from '../styles/ContainerStyles/Container_style';
import WorkoutPanel from './WorkoutPanel';

export default function Workout({ workouts }) {
  const page = useRecoilValue(pageState);
  const displayedWorkouts = workouts ? workouts.slice(page.start, page.end) : [];
  return (displayedWorkouts.length > 0
    ? (
      displayedWorkouts.map((workout) => <WorkoutPanel key={workout.workout_id} workout={workout} />)
    )
    : (
      <Container.NoWorkouts>
        It looks like you have not worked out yet. Head to the
        <Container.LibraryLink href="/UserLibrary"> &nbsp;Library!&nbsp;</Container.LibraryLink>
      </Container.NoWorkouts>
    )
  );
}
