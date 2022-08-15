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
      <MG.WOItem onClick={handleExercisePanel}>
        <MG.WOStar onClick={handleFavorite}>
          {favorite ? <span>&#9734;</span> : <span>&#9733;</span>}
        </MG.WOStar>
        <MG.WOName>Workout Name</MG.WOName>
        <MG.WOCategory>Completed x times</MG.WOCategory>
        <MG.WODescription>Last completed on: MM/DD/YY 00:00 AM</MG.WODescription>
        <GS.Button
          style={{ position: 'relative', top: '25%', left: '32%' }}
        >
          START
        </GS.Button>
        {showExercises && <ExercisePanel />}
      </MG.WOItem>
    </MG.WOPanel>
  );
}
