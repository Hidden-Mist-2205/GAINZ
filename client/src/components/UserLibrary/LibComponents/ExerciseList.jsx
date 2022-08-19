import React, { useState } from 'react';
import axios from 'axios';
import Userfront from '@userfront/core';
import ExerciseItemDropdown from './ExerciseItemDropdown';
import Container from '../../styles/ContainerStyles/Container_style';

export default function ExerciseList({ data }) {
  const [favorite, setFavorite] = useState(data.favorited);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleFavorite = (e) => {
    e.preventDefault();
    axios.put('/putFavoriteExercise', { exerciseId: data.exercise_id }, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Userfront.tokens.accessToken}`,
      },
    })
      .then(() => {
        setFavorite(!favorite);
      })
      .catch((err) => {
        console.error('error toggling favorite workout: ', err);
      });
  };

  return (
    <>
      <Container.WOItem>
        {favorite
          ? <Container.WOStar onClick={handleFavorite}>&#9733;</Container.WOStar>
          : <Container.WOStar onClick={handleFavorite}>&#9734;</Container.WOStar>}
        <Container.WOName onClick={() => setShowDropdown(!showDropdown)}>
          {data.name}
        </Container.WOName>
        <Container.WOCategory>
          {data.area}
        </Container.WOCategory>
        <Container.WODescription>{data.equipment}</Container.WODescription>
      </Container.WOItem>
      {showDropdown && <ExerciseItemDropdown exercise={data} />}
    </>
  );
}
