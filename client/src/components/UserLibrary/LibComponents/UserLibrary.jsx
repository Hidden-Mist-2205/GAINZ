import React, { useState } from 'react';

import { ExerciseLibraryContainer, WorkoutLibraryContainer } from './lib_index';

export default function UserLibrary() {
  const [page, setPage] = useState('exercises');

  return page === 'exercises' ? (
    <ExerciseLibraryPage />
  ) : (
    <WorkoutLibraryPage />
  );
}
