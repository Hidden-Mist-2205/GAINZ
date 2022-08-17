import React from 'react';

export default function UserWorkoutDays({ days }) {
  return <ul>{days ? days.map((day) => <li key={day}>{day}</li>) : null}</ul>;
}
