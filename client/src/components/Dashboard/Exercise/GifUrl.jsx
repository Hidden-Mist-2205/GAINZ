import React, { useState } from 'react';
import WOEx from '../../styles/Dashboard_style/WOExercisePanel';

export default function GifUrl({ gifurl }) {
  return (
    <WOEx.GifBody>
      <WOEx.GIF src={gifurl} />
    </WOEx.GifBody>
  );
}
