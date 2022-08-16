import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { pageState, completedWorkoutsState } from './workoutsAtom';
import MG from '../styles/MyGainz_style/MG';
import Workout from './Workout';

export default function MyGainz() {
  const [page, setPage] = useRecoilState(pageState);
  const [completedWorkouts, setCompletedWorkouts] = useRecoilState(completedWorkoutsState);

  useEffect(() => {
    const userID = 7;
    axios.get(`getCompletedWorkouts?userID=${userID}`)
      .then((res) => {
        setCompletedWorkouts(res.data);
      })
      .catch((err) => {
        console.error('error getting workouts: ', err);
      });
  }, []);

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
