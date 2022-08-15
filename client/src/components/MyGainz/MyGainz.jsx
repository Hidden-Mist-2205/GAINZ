import React from 'react';
import MG from '../styles/MyGainz_style/MG';
import Workout from './Workout';

export default function MyGainz() {
  return (
    <MG.Body>
      <MG.Header>My Gainz</MG.Header>
      <MG.WOHeader>Completed Workouts</MG.WOHeader>
      <Workout />
    </MG.Body>
  );
}
