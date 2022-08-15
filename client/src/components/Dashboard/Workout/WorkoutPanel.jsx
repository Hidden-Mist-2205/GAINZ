import React, { useState } from 'react';
import DB from '../../styles/Dashboard_style/DB';
import GS from '../../styles/GeneralStyles';
import ExercisePanel from './ExercisePanel';

export default function WorkoutPanel() {
  const [toggleFav, setToggleFav] = useState(false);
  const handleFav = () => (
    toggleFav ? setToggleFav(false) : setToggleFav(true)
  );
  const [showEPanel, setShowEPanel] = useState(false);
  const handleEPanel = () => (
    showEPanel ? setShowEPanel(false) : setShowEPanel(true)
  );
  return (
    <DB.WOPanel>
      <DB.WOItem>
        <DB.WOStar onClick={handleFav}>{toggleFav === false ? 'X' : 'O'}</DB.WOStar>
        <DB.WOName onClick={handleEPanel}>Workout Name</DB.WOName>
        <DB.WOCategory>Category</DB.WOCategory>
        <DB.WODescription>Description</DB.WODescription>
        <GS.Button
          style={{ position: 'relative', top: '25%', left: '42%' }}
        >
          START
        </GS.Button>
      </DB.WOItem>
      {showEPanel && <ExercisePanel />}
    </DB.WOPanel>
  );
}
