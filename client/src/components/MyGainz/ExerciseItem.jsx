import React from 'react';
import ED from '../styles/ContainerStyles/ExerciseDropdown_style';

export default function ExerciseItem({ exercise }) {
  return (
    <ED.Item>
      <ED.Name>{exercise.name}</ED.Name>
      <ED.Set>{exercise.sets ? `# of sets: ${exercise.sets}` : '# of sets: you decide!'}</ED.Set>
      <ED.Rep>{exercise.reps ? `# of reps: ${exercise.reps}` : '# of reps: you decide!'}</ED.Rep>
    </ED.Item>
  );
}
