import React from 'react';

import {
  FormDayBubble,
} from './Profile.styled';

export default function WorkoutDayCheckbox({ day, daysAvailable, handleChange }) {
  const checked = daysAvailable.includes(day);
  const dayProperty = day.toLowerCase();

  return (
    <FormDayBubble className="dayCheckbox">
      <label htmlFor={dayProperty}>{day}</label>
      <input
        type="checkbox"
        id={dayProperty}
        value={day}
        checked={checked}
        className="formCheckbox"
        onChange={(e) => handleChange(e)}
      />
    </FormDayBubble>
  );
}
