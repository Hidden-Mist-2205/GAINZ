import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import EditModal from './EditModal';
import DB from '../../styles/Dashboard_style/DB';
import GS from '../../styles/GeneralStyles';
import ExpandExercise from './ExpandExercise';
import currentWorkoutIDState from '../../currentWorkoutAtom';

export default function WorkoutPanel({ workout, updateFavWorkouts }) {
  const setCurrentWorkoutID = useSetRecoilState(currentWorkoutIDState);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEPanel, setShowEPanel] = useState(false);
  const handleEPanel = () => (
    showEPanel ? setShowEPanel(false) : setShowEPanel(true)
  );
  const handleEditModal = () => {
    setShowEditModal(!showEditModal);
  };
  const navigate = useNavigate();
  const routeChange = () => {
    const path = '/StartWorkout';
    setCurrentWorkoutID(workout.workoutid);
    navigate(path);
  };
  return (
    <DB.WOPanel>
      <DB.WOItem>
        {showEditModal
          && (
            <EditModal
              workout={workout}
              handleEditModal={handleEditModal}
              updateFavWorkouts={updateFavWorkouts}
            />
          )}
        <DB.WOStar onClick={handleEditModal}>&#9733;</DB.WOStar>
        <DB.WOName onClick={handleEPanel}>{workout.name}</DB.WOName>
        <DB.WOCategory>{workout.main_area}</DB.WOCategory>
        <DB.WODescription>{workout.description}</DB.WODescription>
        <GS.Button
          onClick={routeChange}
        >
          START
        </GS.Button>

      </DB.WOItem>
      {(showEPanel && workout.steps !== null) && <ExpandExercise steps={workout.steps} />}
    </DB.WOPanel>
  );
}
