import React, { useState } from 'react';

import ExerciseItemDropdown from './ExerciseItemDropdown';

import Container from '../../styles/ContainerStyles/Container_style';
import GS from '../../styles/GeneralStyles';

export default function ExerciseList({ data }) {
  const [favorite, setFavorite] = useState(data.favorited);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleFavorite = (e) => {
    e.preventDefault();
    setFavorite(!favorite);
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
