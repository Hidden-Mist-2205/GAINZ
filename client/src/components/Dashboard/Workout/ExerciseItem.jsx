import React, { useState } from 'react';
import WOEx from '../../styles/Dashboard_style/WOExercisePanel';

export default function ExerciseItem({ step }) {
  return (
    <WOEx.Item>
      <WOEx.Name>{step.name}</WOEx.Name>
      <WOEx.Set>{step.sets} of Sets</WOEx.Set>
      <WOEx.Rep>{step.reps} of Reps</WOEx.Rep>
    </WOEx.Item>
  );
}
