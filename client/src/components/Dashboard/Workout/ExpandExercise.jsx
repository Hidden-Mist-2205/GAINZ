import React, { useState } from 'react';
import WOEx from '../../styles/Dashboard_style/WOExercisePanel';
import ExerciseItem from './ExerciseItem';

export default function ExercisePanel({ steps }) {
  return (
    <WOEx.Body>
      {steps.map((step) => (
        <ExerciseItem step={step} />
      ))}
    </WOEx.Body>
  );
}
