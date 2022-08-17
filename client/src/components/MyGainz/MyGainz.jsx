/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Userfront from '@userfront/core';
import axios from 'axios';
import { pageState, completedWorkoutsState } from './workoutsAtom';
import MG from '../styles/MyGainz_style/MG';
import GS from '../styles/GeneralStyles';
import Workout from './Workout';

export default function MyGainz() {
  const [page, setPage] = useRecoilState(pageState);
  const [completedWorkouts, setCompletedWorkouts] = useRecoilState(completedWorkoutsState);

  useEffect(() => {
    axios.get('/getCompletedWorkouts', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Userfront.tokens.accessToken}`,
      },
    })
      .then((res) => {
        const sorted = [...res.data]?.sort((a, b) => (a.times_completed > b.times_completed ? -1 : 1));
        setCompletedWorkouts(sorted || []);
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
      <GS.PageHeader>My Gainz</GS.PageHeader>
      <MG.WOHeader>Completed Workouts</MG.WOHeader>
      <Workout />
      {completedWorkouts.length / 4 >= 1 ? (
        <MG.NavBtn>
          <MG.Previous onClick={handlePrevious}>{'<'}</MG.Previous>
          <MG.Page>{page.page}</MG.Page>
          <MG.Next onClick={handleNext}>{'>'}</MG.Next>
        </MG.NavBtn>
      ) : null}
    </MG.Body>
  );
}
