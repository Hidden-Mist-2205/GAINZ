import React from 'react';
import M from '../../styles/Dashboard_style/Modal';

export default function SelectCategory({
  handleExerciseInputs, categoryList, mainArea, name,
}) {
  // console.log(categoryList);
  return (
    <M.Select
      name={name}
      value={mainArea}
      onChange={handleExerciseInputs}
    >
      <M.Option />
      {categoryList.map((item) => (<M.Option value={item}>{item}</M.Option>))}
    </M.Select>
  );
}
