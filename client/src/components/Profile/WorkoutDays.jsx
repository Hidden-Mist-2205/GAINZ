import React from 'react';

export default function UserWorkoutDays({ days }) {
  return (
    <>
      <h3>Days You Work Out:</h3>
      <ul>
        {days ? days.map((day) => <li key={day}>{day}</li>) : null}
      </ul>
    </>
  );
}
