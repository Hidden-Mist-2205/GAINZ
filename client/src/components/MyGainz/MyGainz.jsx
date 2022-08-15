import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pageState, completedWorkoutsState } from './workoutsAtom';
import MG from '../styles/MyGainz_style/MG';
import Workout from './Workout';

export default function MyGainz() {
  const [page, setPage] = useRecoilState(pageState);
  // Query for all completed workouts for a given user, and set to recoil state below
  const completedWorkouts = useRecoilValue(completedWorkoutsState);
  const handlePrevious = (e) => {
    e.preventDefault();
    if (page.page === 1) {
      return;
    }
    setPage({
      page: page.page - 1,
      start: page.start - 4,
      end: page.start,
    });
  };
  const handleNext = (e) => {
    e.preventDefault();
    if ((completedWorkouts.length / 4) < (page.page)) {
      return;
    }
    setPage({
      page: page.page + 1,
      start: page.end,
      end: page.end + 4,
    });
  };

  return (
    <MG.Body>
      <MG.Header>My Gainz</MG.Header>
      <MG.WOHeader>Completed Workouts</MG.WOHeader>
      <Workout />
      <MG.NavBtn>
        <MG.Previous onClick={handlePrevious}>{'<'}</MG.Previous>
        <MG.Page>{page.page}</MG.Page>
        <MG.Next onClick={handleNext}>{'>'}</MG.Next>
      </MG.NavBtn>
    </MG.Body>
  );
}
