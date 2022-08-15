import React, { useState } from 'react';
import DB from '../../styles/Dashboard_style/DB';
import WorkoutPanel from './WorkoutPanel';

export default function Workout() {
  return (
    <DB.WOBody>
      <WorkoutPanel />
      <WorkoutPanel />
      <WorkoutPanel />
      <WorkoutPanel />
    </DB.WOBody>
  );
}
