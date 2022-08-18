import React from 'react';
import M from '../../styles/Dashboard_style/Modal';

export default function AddedExerciseList({ exerciseToAdd }) {
  return (
    exerciseToAdd.map((item) => (
      <M.Exercise>
        <div>{item.name}</div>
        <div>{item.sets} Set Of</div>
        <div>{item.reps} Reps</div>
      </M.Exercise>
    ))

  );
}
