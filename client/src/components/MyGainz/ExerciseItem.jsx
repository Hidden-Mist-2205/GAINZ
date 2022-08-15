import React from 'react';
import MGEx from '../styles/MyGainz_style/MGExercise';

export default function ExerciseItem() {
  return (
    <MGEx.Item>
      <MGEx.Name>Exercise Name</MGEx.Name>
      <MGEx.Set># of Sets</MGEx.Set>
      <MGEx.Rep># of Reps</MGEx.Rep>
    </MGEx.Item>
  );
}
