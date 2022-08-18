import React from 'react';
import M from '../../styles/Dashboard_style/Modal';

export default function AddedExerciseList({ exerciseToAdd }) {
  return (
    exerciseToAdd.map((item) => (
      <M.BoxAddedItem>
        <M.BoxItemDetail style={{ width: '100%', marginRight: '10px' }}>{item.name}</M.BoxItemDetail>
        <M.BoxItemDetail>{item.sets} Set Of</M.BoxItemDetail>
        <M.BoxItemDetail>{item.reps} Reps</M.BoxItemDetail>
      </M.BoxAddedItem>
    ))

  );
}
