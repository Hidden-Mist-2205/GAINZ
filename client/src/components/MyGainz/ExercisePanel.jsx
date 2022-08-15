import React from 'react';
import MGEx from '../styles/MyGainz_style/MGExercise';
import ExerciseItem from './ExerciseItem';

export default function ExercisePanel() {
  return (
    <MGEx.Body>
      <ExerciseItem />
      <ExerciseItem />
      <ExerciseItem />
    </MGEx.Body>
  );
}
