import React from 'react';

import {
  FormDayBubble,
} from './Profile.styled';

export default function UserWorkoutDays({ days }) {
  return (
    <>
      <h3>Days You Work Out:</h3>
      <ul>
        {days
          ? days.map((day) => (
            <FormDayBubble>
              <li key={day}>{day}</li>
            </FormDayBubble>
          ))
          : null}
      </ul>
    </>
  );
}
