import React from 'react';
import axios from 'axios';
import Userfront from '@userfront/core';
import ESM from '../styles/StartWorkout_style/ESM';
import GS from '../styles/GeneralStyles';

export default function EndSessionModal({ workout, setOpenModal }) {
  let completeTime = workout.last_completion;
  let finishCount = workout.times_completed;
  const userId = Userfront.user.userId;
  const workoutId = workout.id;

  const endSessionAndSubmit = (e) => {
    e.preventDefault();
    setOpenModal(false);

    if (finishCount === null) {
      finishCount = 1;
    } else {
      finishCount += 1;
    }
    completeTime = new Date();

    axios({
      method: 'PUT',
      url: `${process.env.URL}/updateWorkoutCompletion`,
      headers: {
        ContentType: 'application/json',
        authorization: `Bearer ${Userfront.tokens.accessToken}`,
      },
      params: {
        workoutId,
        userId,
        finishCount,
        completeTime,
      },
    })
      .then((updatedWorkout) => console.log('successfully updated!', updatedWorkout))
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
