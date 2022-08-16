import React, { useState, useEffect } from 'react';

import PageHeader from './LibComponents/PageHeader';
import PageList from './LibComponents/PageList';
import PageContainer from './Styles/PageContainer.styled';

import { getWorkouts } from '../../requests/requests.js';

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
    <PageContainer>
      <PageHeader page="Exercise" />
      <PageList items={exercises} />
    </PageContainer>
  );
}
