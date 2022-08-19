/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { getExercises } from '../../requests/server';
import Container from '../styles/ContainerStyles/Container_style';
import GS from '../styles/GeneralStyles';
import ExerciseList from './LibComponents/ExerciseList';

export default function ExerciseLibrary() {
  const [exercises, setExercises] = useState([]);
  const [displayedExercises, setDisplayedExercises] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [[start, end, pageNumber], setPoints] = useState([0, 4, 1]);
  const [category, setCategory] = useState('See All');
  const page = (e) => (
    e.target.name === 'forward' ? setPoints([start + 4, end + 4, pageNumber + 1]) : setPoints([start - 4, end - 4, pageNumber - 1])
  );
  const cats = ['See All', 'chest', 'back', 'shoulders', 'waist', 'upper arms', 'lower arms', 'upper legs', 'lower legs', 'cardio'];

  useEffect(() => {
    getExercises()
      .then((res) => {
        setExercises(res.data);
        setDisplayedExercises(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchExercises = (e, searchTerm) => {
    e.preventDefault();
    setPoints([0, 4, 1]);
    if (searchTerm === '' && category === 'See All') {
      setDisplayedExercises(exercises);
      return;
    }
    const filteredExercises = exercises.filter(exercise => exercise.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (category === 'See All') {
      setDisplayedExercises(filteredExercises);
      return;
    }
    const filterByCategory = filteredExercises.filter(exercise => exercise.area.toLowerCase() === category.toLowerCase());
    setDisplayedExercises(filterByCategory);
  };

  const handleCategory = (e) => {
    e.preventDefault();
    setPoints([0, 4, 1]);
    setCategory(e.target.value);
    const filteredExercises = exercises.filter(exercise => exercise.name.toLowerCase().includes(searchInput.toLowerCase()));
    if (e.target.value === 'See All') {
      setDisplayedExercises(filteredExercises);
      return;
    }
    const filterByCategory = filteredExercises.filter(exercise => exercise.area.toLowerCase() === e.target.value.toLowerCase());
    setDisplayedExercises(filterByCategory);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setPoints([0, 4, 1]);
    setDisplayedExercises(exercises);
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
        <Container.ChangeCategory onChange={handleCategory}>
          {cats.map((cat) => <option key={cat} value={cat} label={cat} />)}
        </Container.ChangeCategory>
        <GS.Button style={{ maxWidth: '80px' }} onClick={(e) => searchExercises(e, searchInput)}>Search</GS.Button>
        <GS.Button style={{ marginLeft: '10px', maxWidth: '80px' }} onClick={handleReset}>Reset</GS.Button>
      </Container.SearchBarContainer>
      <Container.WOBody>
        {displayedExercises.length > 0 ? (displayedExercises.slice(start, end).map((exercise) => (
          <ExerciseList data={exercise} key={exercise.exercise_id} />
        ))) : (
          <Container.WOItem>
            <Container.NoWorkouts>
              No exercises found. Try another search!
            </Container.NoWorkouts>
          </Container.WOItem>
        )}
        {displayedExercises.length > 4 && (
          <Container.NavBtn>
            {start !== 0 && (
              <Container.Previous onClick={page}>{'<'}</Container.Previous>
            )}
            <Container.PageNumber>{pageNumber}</Container.PageNumber>
            {end < displayedExercises.length
              ? <Container.Next name="forward" onClick={page}>{'>'}</Container.Next>
              : <Container.Next />}
          </Container.NavBtn>
        )}
      </Container.WOBody>
    </>
  );
}
