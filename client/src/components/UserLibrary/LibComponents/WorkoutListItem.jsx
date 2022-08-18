import React, { useState } from 'react';
import axios from 'axios';
import Userfront from '@userfront/core';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import WorkoutItemDropdown from './WorkoutItemDropdown';
import currentWorkoutIDState from '../../currentWorkoutAtom';

import Container from '../../styles/ContainerStyles/Container_style';
import GS from '../../styles/GeneralStyles';

export default function WorkoutListItem({ data }) {
  const [favorite, setFavorite] = useState(data.is_favorited);
  const [showDropdown, setShowDropdown] = useState(false);
  const setCurrentWorkoutID = useSetRecoilState(currentWorkoutIDState);

  const handleFavorite = (e) => {
    e.preventDefault();
    axios.put('/putFavoriteWorkout', { workoutId: data.id }, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Userfront.tokens.accessToken}`,
      },
    })
      .then((res) => {
        console.log(res.status);
        setFavorite(!favorite);
      })
      .catch((err) => {
        console.error('error toggling favorite workout: ', err);
      });
  };

  const navigate = useNavigate();
  const routeChange = () => {
    const path = '/StartWorkout';
    setCurrentWorkoutID(data.id);
    navigate(path);
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
          {data.main_area}
        </Container.WOCategory>
        <Container.WODescription>{data.description}</Container.WODescription>
        <GS.Button onClick={routeChange}> Start </GS.Button>
      </Container.WOItem>
      {showDropdown && <WorkoutItemDropdown exercises={data.steps} />}
    </>
  );
}
