import React from 'react';
import DB from '../../styles/Dashboard_style/DB';
import ExercisePanel from './ExercisePanel';

export default function Exercise() {
  return (
    <DB.WOBody>
      <ExercisePanel />
      <ExercisePanel />
      <ExercisePanel />
      <ExercisePanel />
    </DB.WOBody>
  );
}
