import React from 'react';
import ESM from '../styles/StartWorkout_style/ESM';
import GS from '../styles/GeneralStyles';

export default function EndSessionModal({ workout, setOpenModal }) {
  let completeTime = workout.last_completion;
  let finishCount = workout.times_completed;

  const endSessionAndSubmit = (e) => {
    e.preventDefault();
    if (finishCount === null) {
      finishCount = 1;
    } else {
      finishCount += 1;
    }
    completeTime = new Date();
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
