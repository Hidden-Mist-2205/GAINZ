import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import PageItemDropdown from './PageItemDropdown';
import currentWorkoutIDState from '../../currentWorkoutAtom';

import Container from '../../styles/ContainerStyles/Container_style';
import GS from '../../styles/GeneralStyles';

export default function PageListItem({ data }) {
  const [favorite, setFavorite] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const setCurrentWorkoutID = useSetRecoilState(currentWorkoutIDState);

  const onKeyPressHandler = (e) => {
    e.preventDefault();
  };
  const handleFavorite = (e) => {
    e.preventDefault();
    setFavorite(!favorite);
  };

  const navigate = useNavigate();
  const routeChange = () => {
    const path = '/StartWorkout';
    setCurrentWorkoutID(data.id);
    navigate(path);
  };

  return (
    <>
      <Container.WOItem onClick={() => setShowDropdown(!showDropdown)} role="button" tabIndex={0} onKeyPress={onKeyPressHandler}>
        {favorite
          ? <Container.WOStar onClick={handleFavorite}>&#9733;</Container.WOStar>
          : <Container.WOStar onClick={handleFavorite}>&#9734;</Container.WOStar>}
        <Container.WOName>{data.name}</Container.WOName>
        <Container.WOCategory>
          {data.main_area}
        </Container.WOCategory>
        <Container.WODescription>{data.description}</Container.WODescription>
        <GS.Button onClick={routeChange}> Start </GS.Button>
      </Container.WOItem>
      {showDropdown && <PageItemDropdown exercises={data.steps} />}
    </>
  );
}
