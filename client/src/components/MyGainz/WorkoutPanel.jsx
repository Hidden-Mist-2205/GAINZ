import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Userfront from '@userfront/core';
import axios from 'axios';
import MG from '../styles/MyGainz_style/MG';
import GS from '../styles/GeneralStyles';
import ExercisePanel from './ExercisePanel';
import currentWorkoutIDState from '../currentWorkoutAtom';

export default function WorkoutPanel({ workout }) {
  const [favorite, setFavorite] = useState(workout.favorited);
  const [showExercises, setShowExercises] = useState(false);
  const setCurrentWorkoutID = useSetRecoilState(currentWorkoutIDState);

  const handleFavorite = (e) => {
    e.preventDefault();
    // put request to update favorited value, or delete row from Users/Workouts table?
    axios.put('/putFavoriteWorkout', { workoutId: workout.workout_id }, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Userfront.tokens.accessToken}`,
      },
    })
      .then((res) => {
        console.log('res: ', res);
        setFavorite(!favorite);
      })
      .catch((err) => {
        console.error('error toggling favorite workout: ', err);
      });
  };

  const handleExercisePanel = (e) => {
    e.preventDefault();
    setShowExercises(!showExercises);
  };

  const navigate = useNavigate();
  const routeChange = () => {
    const path = '/StartWorkout';
    setCurrentWorkoutID(workout.workout_id);
    navigate(path);
  };

  return (
    <MG.WOPanel>
      <MG.WOItem>
        {favorite
          ? <MG.WOStar onClick={handleFavorite}>&#9733;</MG.WOStar>
          : <MG.WOStar onClick={handleFavorite}>&#9734;</MG.WOStar>}
        <MG.WOName onClick={handleExercisePanel}>{workout.workout_name}</MG.WOName>
        <MG.WOTimesCompleted>
          {workout.times_completed === 1
            ? `Completed ${workout.times_completed} time`
            : `Completed ${workout.times_completed} times`}
        </MG.WOTimesCompleted>
        <MG.WOLastCompleted>{`Last completed on: ${workout.last_completed}`}</MG.WOLastCompleted>
        <GS.Button onClick={routeChange}>START</GS.Button>
      </MG.WOItem>
      {showExercises && <ExercisePanel exercises={workout.exercises} />}
    </MG.WOPanel>
  );
}
