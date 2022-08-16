import React from 'react';
import SI from '../styles/StartWorkout_style/SI';

export default function StepsInstruction({ currStep }) {
  return (
    <>
      <SI.Header>
        <SI.H4>
          Step &nbsp;
          {currStep.step_num}
          &nbsp; ➣  &nbsp;
          {currStep.name}
          &nbsp; ✕ &nbsp;
          {currStep.reps}
        </SI.H4>
      </SI.Header>
      <SI.GIF src={currStep.gif_url} />
    </>
  );
}
