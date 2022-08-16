import React, { useState, useEffect } from 'react';

import PageHeader from './LibComponents/PageHeader';
import PageList from './LibComponents/PageList';
import PageContainer from './Styles/PageContainer.styled';

import { getExercises } from '../../requests/requests';

export default function ExerciseLibraryPage() {
  const mockData = [
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
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // getExercises()
    //   .then((res) => setExercises(res.data))
    //   .catch((err) => console.log(err));

    setExercises(mockData);
  }, []);

  const searchExercises = (searchInput) => { console.log(searchInput); };

  return (
    <>
      <PageHeader page="Exercise Library" searchFunction={searchExercises} />
      <PageContainer>
        <PageList items={exercises} actionButton={null} />
      </PageContainer>
    </>
  );
}
