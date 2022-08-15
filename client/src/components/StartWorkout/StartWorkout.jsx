import React, { useEffect } from 'react';
import axios from 'axios';
import Userfront from '@userfront/react';
import SW from '../styles/StartWorkout_style/SW';
import GS from '../styles/GeneralStyles';

Userfront.init('rbvr4mqb');

export default function StartWorkout() {
  // const getExcercises = () => {
  //   axios({
  //     method: 'GET',
  //     url: `${process.env.URL}/getExercises`,
  //     headers: {
  //       ContentType: 'application/json',
  //       authorization: `Bearer ${Userfront.tokens.accessToken}`,
  //     },
  //   })
  //     .then((exercisesData) => console.log('get exercises: ', exercisesData))
  //     .catch((err) => console.error(err));
  // };

  // useEffect(() => {
  //   getExcercises();
  // }, []);

  return (
    <>
      <SW.Header>Start Workout 🥊</SW.Header>
      <SW.FlexDiv>
        <GS.Button>End Session</GS.Button>
      </SW.FlexDiv>
      <SW.Container>
        <SW.Description>Description</SW.Description>
      </SW.Container>
    </>
  );
}
