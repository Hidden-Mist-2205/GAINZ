import React, { useEffect, useState } from 'react';

export default function WorkoutDayCheckbox({ day, userDays, handleChange }) {
  const [checked, setChecked] = useState(false);
  const dayProperty = day.toLowerCase();

  useEffect(() => {
    setChecked(userDays ? userDays.includes(day) : false);
  }, []);

  return (
    <div className="dayCheckbox">
      <label htmlFor={dayProperty}>{day}</label>
      <input
        type="checkbox"
        id={dayProperty}
        value={day}
        checked={checked}
        className="formCheckbox"
        onChange={(e) => {
          setChecked(!e.target.checked);
          handleChange(e);
        }}
      />
    </div>
  );
}
