import React, { useState } from 'react';
import DB from '../../styles/Dashboard_style/DB';
import WorkoutPanel from './WorkoutPanel';

export default function Workout({ allFavWorkouts }) {
  const [[start, end], setPoints] = useState([0, 4]);
  const page = (e) => (
    e.target.name === 'foward' ? setPoints([start + 4, end + 4]) : setPoints([start - 4, end - 4])
  );
  return (
    <DB.WOBody>
      <DB.WOBorder>
        {(allFavWorkouts || []).slice(start, end).map((workout) => (
          <WorkoutPanel workout={workout} />
        ))}
      </DB.WOBorder>
      <DB.NavBtn>
        <DB.Previous name="back" onClick={page}>{start !== 0 ? '<' : null}</DB.Previous>
        <DB.Next name="foward" onClick={page}>{end <= allFavWorkouts.length ? '>' : null}</DB.Next>
      </DB.NavBtn>
    </DB.WOBody>

  );
}
