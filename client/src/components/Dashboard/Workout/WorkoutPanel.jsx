import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import DB from '../../styles/Dashboard_style/DB';
import GS from '../../styles/GeneralStyles';
import ExpandExercise from './ExpandExercise';
import currentWorkoutIDState from '../../currentWorkoutAtom';
import { putFavoriteWorkout } from '../../../requests/server';

export default function WorkoutPanel({ workout }) {
  const setCurrentWorkoutID = useSetRecoilState(currentWorkoutIDState);
  const [toggleFav, setToggleFav] = useState(workout.is_favorited);
  const handleFav = () => {
    putFavoriteWorkout(workout.workoutid)
      .then(() => {
        setToggleFav(!toggleFav);
      })
      .catch((err) => console.log(err));
  };
  const [showEPanel, setShowEPanel] = useState(false);
  const handleEPanel = () => (
    showEPanel ? setShowEPanel(false) : setShowEPanel(true)
  );
  const navigate = useNavigate();
  const routeChange = () => {
    const path = '/StartWorkout';
    setCurrentWorkoutID(workout.workout_id);
    navigate(path);
  };
  return (
    <DB.WOPanel>
      <DB.WOItem>
        {toggleFav
          ? <DB.WOStar onClick={handleFav}>&#9733;</DB.WOStar>
          : <DB.WOStar onClick={handleFav}>&#9734;</DB.WOStar>}
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
