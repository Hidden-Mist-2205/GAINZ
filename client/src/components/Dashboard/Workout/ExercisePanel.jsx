import React, { useState } from 'react';
import WOEx from '../../styles/Dashboard_style/WOExercisePanel';
import ExerciseItem from './ExerciseItem';

export default function ExercisePanel() {
  return (
    <WOEx.Body>
      <ExerciseItem />
      <ExerciseItem />
      <ExerciseItem />
      <ExerciseItem />
      <ExerciseItem />
      <ExerciseItem />
    </WOEx.Body>
  );
}
