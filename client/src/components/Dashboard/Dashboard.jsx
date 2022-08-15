import React, { useState } from 'react';
import DB from '../styles/Dashboard_style/DB';
import GS from '../styles/GeneralStyles';
import Workout from './Workout/Workout';
import Exercise from './Exercise/Exercise';
import CreateWorkoutModal from './CreateWorkoutModal/CreateWorkoutModal';

export default function Dashboard() {
  const [type, setType] = useState('Workout');
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => (
    showModal ? setShowModal(false) : setShowModal(true)
  );
  const handleType = () => (
    type === 'Workout' ? setType('Exercise') : setType('Workout')
  );
  return (
    <DB.Body>
      <DB.Header onClick={handleType}>My Dashboard</DB.Header>
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
      <DB.WOHeader>Favorite Workout</DB.WOHeader>
      {type === 'Workout' && <Workout />}
      {type === 'Exercise' && <Exercise />}
      {showModal && <CreateWorkoutModal handleModal={handleModal} />}
    </DB.Body>
  );
}
