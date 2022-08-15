import React from 'react';
import MG from '../styles/MyGainz_style/MG';
import WorkoutPanel from './WorkoutPanel';

export default function Workout() {
  return (
    <MG.WOBody>
      <WorkoutPanel />
      <WorkoutPanel />
      <WorkoutPanel />
      <WorkoutPanel />
      <MG.NavBtn>
        <MG.Previous>{'<'}</MG.Previous>
        <MG.Previous>{'>'}</MG.Previous>
      </MG.NavBtn>
    </MG.WOBody>
  );
}
