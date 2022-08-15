import React, { useState } from 'react';
import MG from '../styles/MyGainz_style/MG';
import GS from '../styles/GeneralStyles';
import ExercisePanel from './ExercisePanel';

export default function WorkoutPanel() {
  const [favorite, setFavorite] = useState(false);
  const [showExercises, setShowExercises] = useState(false);

  const handleFavorite = (e) => {
    e.preventDefault();
    setFavorite(!favorite);
  };

  const handleExercisePanel = (e) => {
    e.preventDefault();
    setShowExercises(!showExercises);
  };

  return (
    <MG.WOPanel>
      <MG.WOItem>
        {favorite
          ? <MG.WOStar onClick={handleFavorite}>&#9734;</MG.WOStar>
          : <MG.WOStar onClick={handleFavorite}>&#9733;</MG.WOStar>}
        <MG.WOName onClick={handleExercisePanel}>Workout Name</MG.WOName>
        <MG.WOTimesCompleted>Completed x times</MG.WOTimesCompleted>
        <MG.WOLastCompleted>Last completed on: MM/DD/YY 00:00 AM</MG.WOLastCompleted>
        <GS.Button>START</GS.Button>
      </MG.WOItem>
      {showExercises && <ExercisePanel />}
    </MG.WOPanel>
  );
}
