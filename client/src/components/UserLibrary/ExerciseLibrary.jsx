import React, { useState, useEffect } from 'react';
import { getExercises } from '../../requests/server';
import Container from '../styles/ContainerStyles/Container_style';
import GS from '../styles/GeneralStyles';
import ExerciseList from './LibComponents/ExerciseList';

export default function ExerciseLibrary() {
  const [exercises, setExercises] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [[start, end, pageNumber], setPoints] = useState([0, 4, 1]);
  const page = (e) => (
    e.target.name === 'forward' ? setPoints([start + 4, end + 4, pageNumber + 1]) : setPoints([start - 4, end - 4, pageNumber - 1])
  );

  useEffect(() => {
    getExercises()
      .then((res) => setExercises(res.data))
      .catch((err) => console.log(err));
  }, []);

  const searchExercises = (e, searchTerm) => {
    e.preventDefault();
    const filteredExercises = exercises.filter(exercise => exercise.name.includes(searchTerm));
    setPoints([0, 4, 1]);
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
        {(exercises || []).slice(start, end).map((workout) => (
          <ExerciseList data={workout} key={workout.id} />
        ))}
        {exercises.length >= 4 && (
          <Container.NavBtn>
            {start !== 0 && (
              <Container.Previous onClick={page}>{'<'}</Container.Previous>
            )}
            <Container.PageNumber>{pageNumber}</Container.PageNumber>
            {end <= exercises.length
              ? <Container.Next name="forward" onClick={page}>{'>'}</Container.Next>
              : <Container.Next />}
          </Container.NavBtn>
        )}
      </Container.WOBody>
    </>
  );
}
