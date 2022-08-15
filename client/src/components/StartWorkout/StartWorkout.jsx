import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Userfront from '@userfront/react';
import SW from '../styles/StartWorkout_style/SW';
import GS from '../styles/GeneralStyles';

Userfront.init('rbvr4mqb');

export default function StartWorkout() {
  const [workout, setWorkout] = useState({});

  const getWorkout = () => {
    axios({
      method: 'GET',
      url: `${process.env.URL}/getWorkout`,
      headers: {
        ContentType: 'application/json',
        // authorization: `Bearer ${Userfront.tokens.accessToken}`,
      },
      params: {
        workoutId: 1,
      },
    })
      .then((exercisesData) => setWorkout(exercisesData.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getWorkout();
  }, []);

  return (
    <>
      <SW.Header>Start Workout 🥊</SW.Header>
      <SW.FlexDiv>
        <GS.Button>End Session</GS.Button>
      </SW.FlexDiv>
      <SW.Container>
        <SW.WorkoutName>Workout Name</SW.WorkoutName>
        <SW.Description>Description</SW.Description>
        <SW.FlexContainer>
          <SW.InnerContainer>Video/GIF</SW.InnerContainer>
          <SW.InnerContainer>Instructions</SW.InnerContainer>
          <SW.ExerciseSelection>
            <div>Exercise 1</div>
            <div>Exercise 2</div>
            <div>Exercise 3</div>
          </SW.ExerciseSelection>
        </SW.FlexContainer>
      </SW.Container>
    </>
  );
}
