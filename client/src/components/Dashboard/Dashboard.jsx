import React, { useState, useEffect } from 'react';
import Userfront from '@userfront/core';
import DB from '../styles/Dashboard_style/DB';
import GS from '../styles/GeneralStyles';
import Workout from './Workout/Workout';
import Exercise from './Exercise/Exercise';
import CreateWorkoutModal from './CreateWorkoutModal/CreateWorkoutModal';
import M from '../styles/Dashboard_style/Modal';
import { getAllFavExercise, getAllFavWorkouts } from '../../requests/server';
import Container from '../styles/ContainerStyles/Container_style';

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
    updateFavWorkouts();
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
  const updateFavWorkouts = () => {
    getAllFavWorkouts()
      .then((r) => {
        console.log(r.data);
        r.data.sort((a, b) => (a.created_by === Userfront.user.userId ? -1 : 0));
        setAllFavWorkouts(r.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <GS.PageHeader>My Dashboard</GS.PageHeader>
      <Container.Body>
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
          <DB.Tabs
            name="Workout"
            onClick={handleType}
            style={{ borderRight: 'solid #121212', borderBottom: exerciseTabLine }}
          >
            Favorite Workout
          </DB.Tabs>
          <DB.Tabs
            name="Exercise"
            onClick={handleType}
            style={{ borderBottom: workoutTabLine }}
          >
            Favorite Exercise
          </DB.Tabs>
        </M.Column>
        {type === 'Workout' && <Workout allFavWorkouts={allFavWorkouts} updateFavWorkouts={updateFavWorkouts} />}
        {type === 'Exercise' && <Exercise allExerciseWorkouts={allExerciseWorkouts} handleModal={handleModal} />}
        {showModal && <CreateWorkoutModal handleModal={handleModal} />}
      </Container.Body>
    </>
  );
}
