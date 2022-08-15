import React from 'react';
import DB from '../../styles/Dashboard_style/DB';
import ExercisePanel from './ExercisePanel';

export default function Exercise({ handleModal }) {
  const back = '<';
  const foward = '>';
  return (
    <DB.WOBody>
      <ExercisePanel handleModal={handleModal} />
      <ExercisePanel handleModal={handleModal} />
      <ExercisePanel handleModal={handleModal} />
      <ExercisePanel handleModal={handleModal} />
      <DB.NavBtn>
        <DB.Previous>{back}</DB.Previous>
        <DB.Next>{foward}</DB.Next>
      </DB.NavBtn>
    </DB.WOBody>
  );
}
