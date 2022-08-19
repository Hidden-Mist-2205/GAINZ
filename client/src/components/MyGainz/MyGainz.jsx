/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useRecoilState } from 'recoil';
import Userfront from '@userfront/core';
import axios from 'axios';
import { pageState } from './workoutsAtom';
import GS from '../styles/GeneralStyles';
import Container from '../styles/ContainerStyles/Container_style';
import Workout from './Workout';

export default function MyGainz() {
  const [animationParent] = useAutoAnimate();
  const [page, setPage] = useRecoilState(pageState);
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

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
    <>
      <GS.PageHeader>My Gainz</GS.PageHeader>
      <Container.WOHeader>Completed Workouts</Container.WOHeader>
      <Container.WOBody>
        {completedWorkouts && <Workout ref={animationParent} workouts={completedWorkouts} />}
        {completedWorkouts.length / 4 > 1 ? (
          <Container.NavBtn>
            {page.start !== 0 && <Container.Previous onClick={handlePrevious}>{'<'}</Container.Previous>}
            <Container.PageNumber>{page.page}</Container.PageNumber>
            {page.end < completedWorkouts.length ? <Container.Next onClick={handleNext}>{'>'}</Container.Next> : <Container.Next />}
          </Container.NavBtn>
        ) : null}
      </Container.WOBody>
    </>
  );
}
