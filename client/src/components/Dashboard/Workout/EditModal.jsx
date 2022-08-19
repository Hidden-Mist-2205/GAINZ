import React from 'react';
import Userfront from '@userfront/core';
import GS from '../../styles/GeneralStyles';
import ESM from '../../styles/StartWorkout_style/ESM';
import M from '../../styles/Dashboard_style/Modal';
import DB from '../../styles/Dashboard_style/DB';
import { putFavoriteWorkout, deleteWorkout } from '../../../requests/server';

export default function EditModal({ workout, handleEditModal, updateFavWorkouts }) {
  const handleFav = () => {
    putFavoriteWorkout(workout.workoutid)
      .then(() => {
        updateFavWorkouts();
        handleEditModal();
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = () => {
    deleteWorkout(workout.workoutid)
      .then(() => {
        updateFavWorkouts();
        handleEditModal();
      })
      .catch((err) => console.log(err));
  };
  return (
    <ESM.Background>
      <ESM.Container>
        <ESM.TextContainer>
          <ESM.Text style={{ paddingTop: '10px' }}>Are you sure?</ESM.Text>
          <DB.EditModalBtn>
            {workout.created_by === Userfront.user.userId && <GS.OutlinedBtn onClick={handleDelete} style={{ width: '30%', marginRight: '5%' }}>Delete</GS.OutlinedBtn>}
            <GS.OutlinedBtn onClick={handleFav} style={{ width: '30%', marginLeft: '5%' }}>Unfavorite</GS.OutlinedBtn>
          </DB.EditModalBtn>
          <M.CloseButton onClick={handleEditModal}>X</M.CloseButton>
        </ESM.TextContainer>
      </ESM.Container>
    </ESM.Background>
  );
}
