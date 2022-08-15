import React from 'react';

import PageHeader from './LibComponents/PageHeader';
import PageList from './LibComponents/PageList';

export default function ExerciseLibraryPage() {
  const exercises = [
    {
      id: 1,
      name: 'Exercise Name',
      description: 'Exercise Description',
      gifUrl: '#',
      category: 'Exercise Category',
      favorited: 'false',
    },
    {
      id: 2,
      name: 'Exercise Name',
      description: 'Exercise Description',
      gifUrl: '#',
      category: 'Exercise Category',
      favorited: 'false',
    },
    {
      id: 3,
      name: 'Exercise Name',
      description: 'Exercise Description',
      gifUrl: '#',
      category: 'Exercise Category',
      favorited: 'false',
    },
  ];
  return (
    <>
      <PageHeader page="Exercises" />
      <PageList items={exercises} />
    </>
  );
}
