import React, { useState } from 'react';
import WOEx from '../../styles/Dashboard_style/WOExercisePanel';
import ExerciseItem from './ExerciseItem';
import ED from '../../styles/ContainerStyles/ExerciseDropdown_style';

export default function ExercisePanel({ steps }) {
  return (
    <ED.Body>
      {steps.map((step) => (
        <ExerciseItem step={step} />
      ))}
    </ED.Body>
  );
}
