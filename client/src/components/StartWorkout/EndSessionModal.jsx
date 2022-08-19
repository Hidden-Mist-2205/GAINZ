import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Userfront from '@userfront/core';
import ESM from '../styles/StartWorkout_style/ESM';
import GS from '../styles/GeneralStyles';

export default function EndSessionModal({ workout, setOpenModal }) {
  let completeTime = workout.last_completion;
  let finishCount = workout.times_completed;
  const { userId } = Userfront.user;
  const workoutId = workout.id;

  const navigate = useNavigate();
  const routeChange = () => {
    const path = '/MyGainz';
    navigate(path);
  };

  const endSessionAndSubmit = (e) => {
    e.preventDefault();

    setOpenModal(false);
    routeChange();

    if (finishCount === null) {
      finishCount = 1;
    } else {
      finishCount += 1;
    }
    completeTime = new Date();
    completeTime = JSON.stringify(completeTime).slice(1, 11);

    axios({
      method: 'PUT',
      url: '/updateWorkoutCompletion',
      headers: {
        ContentType: 'application/json',
        authorization: `Bearer ${Userfront.tokens.accessToken}`,
      },
      data: {
        userId,
        workoutId,
        finishCount,
        completeTime,
      },
    })
      .then(() => console.log('successfully updated!'))
      .catch((err) => console.log(err));
  };

  return (
    <ESM.Background>
      <ESM.Container>
        <ESM.Xout onClick={() => setOpenModal(false)}> X </ESM.Xout>
        <ESM.TextContainer>
          <ESM.Text>
            Done with current workout session?
          </ESM.Text>
        </ESM.TextContainer>
        <GS.Button onClick={(e) => endSessionAndSubmit(e)}> Confirm </GS.Button>
      </ESM.Container>
    </ESM.Background>
  );
}
