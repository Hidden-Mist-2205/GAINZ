import React, { useState } from 'react';
import DB from '../styles/Dashboard_style/DB';
import GS from '../styles/GeneralStyles';
import Workout from './Workout/Workout';

export default function Dashboard() {
  const [showEPanel, setEPanel] = useState(false);
  const [toggleFav, setToggleFav] = useState(false);
  const handleEPanel = () => (
    showEPanel ? setEPanel(false) : setEPanel(true)
  );
  const handleFav = () => (
    toggleFav ? setToggleFav(false) : setToggleFav(true)
  );
  const [type, setType] = ('');
  return (
    <DB.Body>
      <DB.Header>My DBboard</DB.Header>
      {type === 'workout'
        && (
          <GS.OutlinedBtn
            style={{ float: 'right' }}
          >
            Create WorkOut
          </GS.OutlinedBtn>
        )}
      <DB.WOHeader>Favorite Workout</DB.WOHeader>
      <Workout />
    </DB.Body>
  );
}
