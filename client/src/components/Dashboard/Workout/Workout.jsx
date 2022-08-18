import React, { useState } from 'react';
import DB from '../../styles/Dashboard_style/DB';
import WorkoutPanel from './WorkoutPanel';

export default function Workout({ allFavWorkouts }) {
  const [[start, end, index], setPoints] = useState([0, 4, 1]);
  const page = (e) => (
    e.target.name === 'foward' ? setPoints([start + 4, end + 4, index + 1]) : setPoints([start - 4, end - 4, index - 1])
  );
  return (
    <DB.WOBody>
      <DB.WOBorder>
        {(allFavWorkouts || []).slice(start, end).map((workout) => (
          <WorkoutPanel workout={workout} />
        ))}
      </DB.WOBorder>
      <DB.NavBtn>
        <DB.Previous onClick={page}>{start !== 0 ? '<' : null}</DB.Previous>
        <DB.Next name="foward" onClick={page}>{end <= allFavWorkouts.length ? '>' : null}</DB.Next>
      </DB.NavBtn>
    </DB.WOBody>

  );
}
