import React from 'react';
import MGEx from '../styles/MyGainz_style/MGExercise';

export default function ExerciseItem({ exercise }) {
  return (
    <MGEx.Item>
      <MGEx.Name>{exercise.name}</MGEx.Name>
      <MGEx.Set>{exercise.sets ? `# of sets: ${exercise.sets}` : '# of sets: you decide!'}</MGEx.Set>
      <MGEx.Rep>{exercise.reps ? `# of reps: ${exercise.reps}` : '# of reps: you decide!'}</MGEx.Rep>
    </MGEx.Item>
  );
}
