import React, { useState } from 'react';
import DB from '../styles/Dashboard_style/DB';
import GS from '../styles/GeneralStyles';
import Workout from './Workout/Workout';
import Exercise from './Exercise/Exercise';
import CreateWorkoutModal from './CreateWorkoutModal/CreateWorkoutModal';
import M from '../styles/Dashboard_style/Modal';

export default function Dashboard() {
  const [type, setType] = useState('Workout');
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => (
    showModal ? setShowModal(false) : setShowModal(true)
  );
  const handleType = (e) => (
    e.target.name === 'Workout' ? setType('Workout') : setType('Exercise')
  );
  return (
    <DB.Body>
      <DB.Header>My Dashboard</DB.Header>
      <M.Column style={{ width: '80%', margin: 'auto' }}>
        {type === 'Exercise'
          && (
            <GS.OutlinedBtn
              style={{ float: 'right' }}
            >
              Add Exercise
            </GS.OutlinedBtn>
          )}
        {type === 'Workout'
          && (
            <GS.OutlinedBtn
              style={{ float: 'right' }}
              onClick={handleModal}
            >
              Create WorkOut
            </GS.OutlinedBtn>
          )}
        <DB.Tabs name="Workout" onClick={handleType} style={{ 'border-right': 'solid black' }}>Favorite Workout</DB.Tabs>
        <DB.Tabs name="Exercise" onClick={handleType}>Favorite Exercise</DB.Tabs>
      </M.Column>
      {type === 'Workout' && <Workout />}
      {type === 'Exercise' && <Exercise handleModal={handleModal} />}
      {showModal && <CreateWorkoutModal handleModal={handleModal} />}
    </DB.Body>
  );
}
