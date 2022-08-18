import React, { useState, useEffect } from 'react';

// import PageHeader from './LibComponents/PageHeader';
// import PageList from './LibComponents/PageList';
// import PageContainer from './Styles/PageContainer.styled';

import { getExercises } from '../../requests/server';
import Container from '../styles/ContainerStyles/Container_style';
import GS from '../styles/GeneralStyles';
import ExerciseList from './LibComponents/ExerciseList';

export default function ExerciseLibraryPage() {
  const [exercises, setExercises] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    getExercises()
      .then((res) => setExercises(res.data))
      .catch((err) => console.log(err));
  }, []);

  const searchExercises = (e, searchTerm) => {
    e.preventDefault();
    const filteredExercises = exercises.filter(exercise => exercise.name.includes(searchTerm));
    setExercises(filteredExercises);
  };

  return (
    <>
      <GS.PageHeader> Exercise Library </GS.PageHeader>
      <Container.SearchBarContainer>
        <Container.SearchBar
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <GS.Button onClick={(e) => searchExercises(e, searchInput)}>Search</GS.Button>
      </Container.SearchBarContainer>
      <Container.WOBody>
        {exercises && exercises.map((exercise) => (
          <ExerciseList data={exercise} key={exercise.id} />
        ))}
      </Container.WOBody>
    </>
  );
}
