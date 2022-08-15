import React from 'react';
import DB from '../../styles/Dashboard_style/DB';
import WorkoutPanel from './WorkoutPanel';

export default function Workout() {
  const back = '<';
  const foward = '>';
  return (
    <DB.WOBody>
      <WorkoutPanel />
      <WorkoutPanel />
      <WorkoutPanel />
      <WorkoutPanel />
      <DB.NavBtn>
        <DB.Previous>{back}</DB.Previous>
        <DB.Next>{foward}</DB.Next>
      </DB.NavBtn>
    </DB.WOBody>
  );
}
