import React, { useEffect, useState } from 'react';

export default function WorkoutDayCheckbox({ day, daysAvailable, handleChange }) {
  const checked = daysAvailable.includes(day);
  const dayProperty = day.toLowerCase();

  return (
    <div className="dayCheckbox">
      <label htmlFor={dayProperty}>{day}</label>
      <input
        type="checkbox"
        id={dayProperty}
        value={day}
        checked={checked}
        className="formCheckbox"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
