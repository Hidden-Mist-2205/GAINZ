import React from 'react';
import ED from '../../styles/ContainerStyles/ExerciseDropdown_style';

export default function ExerciseItemDropdown({ exercise }) {
  return (
    exercise
      ? (
        <ED.GifBody style={{ }}>
          <img
            src={exercise.gif_url}
            alt={exercise.name}
            style={{ maxWidth: '280px', padding: '20px' }}
          />
        </ED.GifBody>
      ) : (
        <ED.Body>
          <ED.NoExercises>
            Hmmm... there are no exercises for this workout.
          </ED.NoExercises>
        </ED.Body>
      )
  );
}
