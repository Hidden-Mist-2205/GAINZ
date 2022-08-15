import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MG from '../styles/MyGainz_style/MG';
import GS from '../styles/GeneralStyles';
import ExercisePanel from './ExercisePanel';

export default function WorkoutPanel({ workout }) {
  const [favorite, setFavorite] = useState(workout.favorited);
  const [showExercises, setShowExercises] = useState(false);

  const handleFavorite = (e) => {
    e.preventDefault();
    // put request to update favorited value, or delete row from Users/Workouts table?
    setFavorite(!favorite);
  };

  const handleExercisePanel = (e) => {
    e.preventDefault();
    setShowExercises(!showExercises);
  };

  const navigate = useNavigate();
  const routeChange = () => {
    // change path to add workout ID
    const path = '/StartWorkout';
    navigate(path);
  };

  return (
    <MG.WOPanel>
      <MG.WOItem>
        {favorite
          ? <MG.WOStar onClick={handleFavorite}>&#9734;</MG.WOStar>
          : <MG.WOStar onClick={handleFavorite}>&#9733;</MG.WOStar>}
        <MG.WOName onClick={handleExercisePanel}>{workout.Name}</MG.WOName>
        <MG.WOTimesCompleted>
          {workout.TimesCompleted === 1
            ? `Completed ${workout.TimesCompleted} time`
            : `Completed ${workout.TimesCompleted} times`}
        </MG.WOTimesCompleted>
        <MG.WOLastCompleted>{`Last completed on: ${workout.LastCompleted}`}</MG.WOLastCompleted>
        <GS.Button onClick={routeChange}>START</GS.Button>
      </MG.WOItem>
      {showExercises && <ExercisePanel />}
    </MG.WOPanel>
  );
}
