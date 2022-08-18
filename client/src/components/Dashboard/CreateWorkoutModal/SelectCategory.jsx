import React from 'react';
import M from '../../styles/Dashboard_style/Modal';

export default function SelectCategory({ handleExerciseInputs, mainArea }) {
  return (
    <M.Select
      name="mainArea"
      value={mainArea}
      onChange={handleExerciseInputs}
    >
      <M.Option />
      <M.Option value="chest">Chest</M.Option>
      <M.Option value="back">Back </M.Option>
      <M.Option value="shoulders">Shoulders</M.Option>
      <M.Option value="waist">Waist</M.Option>
      <M.Option value="upper arms">Upper Arms</M.Option>
      <M.Option value="lower arms">Lower Arms</M.Option>
      <M.Option value="upper legs">Upper Legs</M.Option>
      <M.Option value="lower legs">Lower Legs</M.Option>
      <M.Option value="cardio">Cardio</M.Option>
    </M.Select>
  );
}
