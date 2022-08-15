import React, { useState } from 'react';

import {
  PageHeader,
  PageList,
} from './lib_index';

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

export default function ExerciseLibraryPage() {
  const [searchInput, setSearchInput] = useState('');
  return (
    <>
      <PageHeader page="Exercises" />
      <PageList items={exercises} />
    </>
  );
}
