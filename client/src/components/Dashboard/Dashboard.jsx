import React, { useState, useEffect } from 'react';
import DB from '../styles/Dashboard_style/DB';
import GS from '../styles/GeneralStyles';
import Workout from './Workout/Workout';
import Exercise from './Exercise/Exercise';
import CreateWorkoutModal from './CreateWorkoutModal/CreateWorkoutModal';
import M from '../styles/Dashboard_style/Modal';
import { getAllFavExercise, getAllFavWorkouts } from '../../requests/server';

export default function Dashboard() {
  const [type, setType] = useState('Workout');
  const [showModal, setShowModal] = useState(false);
  const [[exerciseTabLine, workoutTabLine], setShowTabLine] = useState(['none', 'solid #121212']);
  const [allExerciseWorkouts, setAllExerciseWorkouts] = useState([]);
  const [allFavWorkouts, setAllFavWorkouts] = useState([]);

  useEffect(() => {
    getAllFavExercise()
      .then((r) => {
        setAllExerciseWorkouts(r.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getAllFavWorkouts()
      .then((r) => {
        console.log(r.data);
        setAllFavWorkouts(r.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleModal = () => (
    showModal ? setShowModal(false) : setShowModal(true)
  );
  const handleType = (e) => {
    if (e.target.name === 'Workout') {
      setShowTabLine(['none', 'solid #121212']);
      setType('Workout');
    } else {
      setShowTabLine(['solid #121212', 'none']);
      setType('Exercise');
    }
  };
  return (
    <DB.Body>
      <GS.PageHeader>My Dashboard</GS.PageHeader>
      <M.Column style={{ width: '85%', margin: 'auto' }}>
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
        <DB.Tabs
          name="Workout"
          onClick={handleType}
          style={{ 'borderRight': 'solid #121212', 'borderBottom': exerciseTabLine }}
        >
          Favorite Workout
        </DB.Tabs>
        <DB.Tabs
          name="Exercise"
          onClick={handleType}
          style={{ 'borderBottom': workoutTabLine }}
        >
          Favorite Exercise
        </DB.Tabs>
      </M.Column>
      {type === 'Workout' && <Workout allFavWorkouts={allFavWorkouts} />}
      {type === 'Exercise' && <Exercise allExerciseWorkouts={allExerciseWorkouts} handleModal={handleModal} />}
      {showModal && <CreateWorkoutModal handleModal={handleModal} />}
    </DB.Body>
  );
}
