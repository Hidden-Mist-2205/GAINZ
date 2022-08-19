import React, { useState } from 'react';
import DB from '../../styles/Dashboard_style/DB';
import WorkoutPanel from './WorkoutPanel';
import Container from '../../styles/ContainerStyles/Container_style';

export default function Workout({ allFavWorkouts, updateFavWorkouts }) {
  const [[start, end, indexPage], setPoints] = useState([0, 4, 1]);
  const page = (e) => (
    e.target.name === 'forward' ? setPoints([start + 4, end + 4, indexPage + 1]) : setPoints([start - 4, end - 4, indexPage - 1])
  );
  return (
    <DB.WOBody>
      <DB.WOBorder>
        {(allFavWorkouts || []).slice(start, end).map((workout) => (
          <WorkoutPanel workout={workout} updateFavWorkouts={updateFavWorkouts} />
        ))}
      </DB.WOBorder>
      <DB.NavBtn>
        <Container.Previous name="back" onClick={page}>{start !== 0 ? '<' : ' '}</Container.Previous>
        <Container.PageNumber>{indexPage}</Container.PageNumber>
        <Container.Next name="forward" onClick={page}>{end <= allFavWorkouts.length ? '>' : ' '}</Container.Next>
      </DB.NavBtn>
    </DB.WOBody>
  );
}
