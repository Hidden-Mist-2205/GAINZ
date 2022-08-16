import React from 'react';

import GS from '../../styles/GeneralStyles';

export default function ActionButton({ text, clickHandler }) {
  return (
    <GS.Button onClick={clickHandler}>{text}</GS.Button>
  );
}
