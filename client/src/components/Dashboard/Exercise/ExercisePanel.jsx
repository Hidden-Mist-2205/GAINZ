import React, { useState } from 'react';
import DB from '../../styles/Dashboard_style/DB';
import GS from '../../styles/GeneralStyles';
import GifUrl from './GifUrl';
import { putFavoriteExercise } from '../../../requests/server';

export default function ExercisePanel({ handleModal, exercise }) {
  const [showEPanel, setEPanel] = useState(false);
  const [toggleFav, setToggleFav] = useState(exercise.favorited);
  const handleEPanel = () => (
    showEPanel ? setEPanel(false) : setEPanel(true)
  );
  const handleFav = () => {
    putFavoriteExercise(exercise.exerciseid)
      .then(() => {
        setToggleFav(!toggleFav);
      })
      .catch((err) => console.log(err));
  };

  return (
    <DB.WOPanel>
      <DB.WOItem>
        {toggleFav
          ? <DB.WOStar onClick={handleFav}>&#9733;</DB.WOStar>
          : <DB.WOStar onClick={handleFav}>&#9734;</DB.WOStar>}
        <DB.WOName onClick={handleEPanel}>{exercise.name}</DB.WOName>
        <DB.WOCategory>{exercise.area}</DB.WOCategory>
        <DB.WODescription>{exercise.equipment}</DB.WODescription>
        <GS.Button
          // style={{ position: 'relative', top: '25%', left: '42%' }}
          onClick={handleModal}
        >
          Create Workout
        </GS.Button>
      </DB.WOItem>
      {(showEPanel && exercise.gifurl) && <GifUrl gifurl={exercise.gifurl} />}
    </DB.WOPanel>
  );
}
