import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Userfront from '@userfront/react';
import SW from '../styles/StartWorkout_style/SW';
import GS from '../styles/GeneralStyles';
import CountDownTimer from './CountDownTimer';
import StepsInstruction from './StepsInstruction';
import currentWorkoutIDState from '../currentWorkoutAtom';

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
        userId: 1,
        workoutId: 2,
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
    console.log('currworkoutID: ', currentWorkoutIDState);
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
          Description: &nbsp;
          {workout.description}
        </SW.Description>
        <SW.FlexContainer>
          <SW.InnerContainer>
            <CountDownTimer
              currStepNum={currStep.step_num}
              setCurrStep={setCurrStep}
              steps={steps}
            />
          </SW.InnerContainer>
          <SW.InnerContainer>
            <StepsInstruction currStep={currStep} />
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
