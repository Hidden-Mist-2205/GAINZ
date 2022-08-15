import React, { useState } from 'react';
import WOEx from '../../styles/Dashboard_style/WOExercisePanel';

export default function ExerciseItem() {
  return (
    <WOEx.Item>
      <WOEx.Name>Exercise Name</WOEx.Name>
      <WOEx.Set># of Sets</WOEx.Set>
      <WOEx.Rep># of Reps</WOEx.Rep>
    </WOEx.Item>
  );
}
