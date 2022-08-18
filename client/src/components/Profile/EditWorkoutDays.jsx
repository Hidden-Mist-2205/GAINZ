import React from 'react';
import WorkoutDayCheckbox from './WorkoutDayCheckbox';

import { FormFlexColumn } from './Profile.styled';

export default function EditWorkoutDays() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (
    <FormFlexColumn>
      <fieldset>
        <legend>Days You Work Out</legend>
        {days.map((day) => (
          <WorkoutDayCheckbox
            day={day}
            key={day}
          />
        ))}
      </fieldset>
    </FormFlexColumn>
  );
}
