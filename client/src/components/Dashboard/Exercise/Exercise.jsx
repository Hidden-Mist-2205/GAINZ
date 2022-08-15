import React, { useState } from 'react';
import DB from '../../styles/Dashboard_style/DB';
import GS from '../../styles/GeneralStyles';

export default function Workout() {
  const [showEPanel, setEPanel] = useState(false);
  const [toggleFav, setToggleFav] = useState(false);
  const handleEPanel = () => (
    showEPanel ? setEPanel(false) : setEPanel(true)
  );
  const handleFav = () => (
    toggleFav ? setToggleFav(false) : setToggleFav(true)
  );
  return (
    <DB.WOBody>
      <DB.WOPanel>
        <DB.WOStar onClick={handleFav}>{toggleFav === false ? 'X' : 'O'}</DB.WOStar>
        <DB.WOName onClick={handleEPanel}>Exercise Name</DB.WOName>
        <DB.WOCategory>Category</DB.WOCategory>
        <DB.WODescription>Description</DB.WODescription>
        <GS.Button
          style={{ position: 'relative', top: '25%', left: '42%' }}
        >
          Create Workout
        </GS.Button>
      </DB.WOPanel>
      <DB.WOPanel />
      <DB.WOPanel />
      <DB.WOPanel />
    </DB.WOBody>
  );
}