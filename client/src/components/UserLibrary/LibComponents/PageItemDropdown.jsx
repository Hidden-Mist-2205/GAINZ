import React from 'react';
import ED from '../../styles/ContainerStyles/ExerciseDropdown_style';
import ExerciseItem from '../../MyGainz/ExerciseItem';

export default function PageItemDropdown({ exercises }) {
  return (
    exercises
      ? (
        <ED.Body>
          {exercises.map((exercise) => <ExerciseItem key={exercise.exercise_id} exercise={exercise} />)}
        </ED.Body>
      ) : (
        <ED.Body>
          <ED.NoExercises>
            Hmmm... there are no exercises for this workout.
          </ED.NoExercises>
        </ED.Body>
      )
  );
}
