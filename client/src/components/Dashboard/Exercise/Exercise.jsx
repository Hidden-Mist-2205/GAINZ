import React, {useState} from 'react';
import DB from '../../styles/Dashboard_style/DB';
import ExercisePanel from './ExercisePanel';

export default function Exercise({ handleModal, allExerciseWorkouts }) {
  const [[start, end], setPoints] = useState([0, 4]);
  const page = (e) => (
    e.target.name === 'foward' ? setPoints([start + 4, end + 4]) : setPoints([start - 4, end - 4])
  );
  return (
    <DB.WOBody>
      <DB.WOBorder>
        {(allExerciseWorkouts || []).map((exercise) => (
          <ExercisePanel handleModal={handleModal} exercise={exercise} />
        ))}
      </DB.WOBorder>
      <DB.NavBtn>
        <DB.Previous name="back" onClick={page}>{start !== 0 ? '<' : null}</DB.Previous>
        <DB.Next name="foward" onClick={page}>{end <= allExerciseWorkouts.length ? '>' : null}</DB.Next>
      </DB.NavBtn>
    </DB.WOBody>
  );
}
