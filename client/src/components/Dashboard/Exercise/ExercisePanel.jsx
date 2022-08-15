import React, { useState } from 'react';
import DB from '../../styles/Dashboard_style/DB';
import GS from '../../styles/GeneralStyles';

export default function ExercisePanel({ handleModal }) {
  const [showEPanel, setEPanel] = useState(false);
  const [toggleFav, setToggleFav] = useState(false);
  const handleEPanel = () => (
    showEPanel ? setEPanel(false) : setEPanel(true)
  );
  const handleFav = () => (
    toggleFav ? setToggleFav(false) : setToggleFav(true)
  );
  return (
    <DB.WOPanel>
      <DB.WOItem>
        <DB.WOStar onClick={handleFav}>{toggleFav === false ? 'X' : 'O'}</DB.WOStar>
        <DB.WOExName onClick={handleEPanel}>Exercise Name</DB.WOExName>
        <DB.WOCategory>Category</DB.WOCategory>
        <DB.WODescription>Description</DB.WODescription>
        <GS.Button
          style={{ position: 'relative', top: '25%', left: '42%' }}
          onClick={handleModal}
        >
          Create Workout
        </GS.Button>
      </DB.WOItem>
    </DB.WOPanel>
  );
}