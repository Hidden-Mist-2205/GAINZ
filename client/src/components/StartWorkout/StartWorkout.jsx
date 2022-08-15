import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Userfront from '@userfront/react';
import SW from '../styles/StartWorkout_style/SW';
import GS from '../styles/GeneralStyles';

Userfront.init('rbvr4mqb');

export default function StartWorkout() {
  const [workout, setWorkout] = useState({});
  const [steps, setSteps] = useState([]);
  const [currStep, setCurrStep] = useState('');

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
      .then((exercisesData) => {
        setWorkout(exercisesData.data);
        setSteps(exercisesData.data.steps);
        setCurrStep(exercisesData.data.steps[0]);
      })
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
        <SW.WorkoutName>
          {workout.name}
        </SW.WorkoutName>
        <SW.Description>
          Target Area: &nbsp;
          {workout.main_area}
          <br />
          {workout.description}
        </SW.Description>
        <SW.FlexContainer>
          <SW.InnerContainer>
            TIMER
          </SW.InnerContainer>
          <SW.InnerContainer>
            <SW.StepInstruction>
              Step &nbsp;
              {currStep.step_num}
              &nbsp; ➣  &nbsp;
              {currStep.name}
            </SW.StepInstruction>
            <SW.GIF src={currStep.gif_url} />
          </SW.InnerContainer>
          <SW.ExerciseSelection>
            {steps.map((step) => (
              <SW.Step key={step.step_num} onClick={() => setCurrStep(step)}>
                Step
                {step.step_num}
              </SW.Step>
            ))}
          </SW.ExerciseSelection>
        </SW.FlexContainer>
      </SW.Container>
    </>
  );
}
