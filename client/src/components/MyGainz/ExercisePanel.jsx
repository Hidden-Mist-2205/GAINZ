/* eslint-disable max-len */
import React from 'react';
import MGEx from '../styles/MyGainz_style/MGExercise';
import ExerciseItem from './ExerciseItem';

export default function ExercisePanel({ exercises }) {
  return (
    exercises
      ? (
        <MGEx.Body>
          {exercises.map((exercise) => <ExerciseItem key={exercise.exercise_id} exercise={exercise} />)}
        </MGEx.Body>
      ) : (
        <MGEx.Body>
          <MGEx.NoExercises>
            Hmmm... there are no exercises for this workout.
          </MGEx.NoExercises>
        </MGEx.Body>
      )
  );
}
