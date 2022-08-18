import React from 'react';

import GS from '../../styles/GeneralStyles';

export default function SearchButton({ handleClick }) {
  return (
    <GS.Button onClick={handleClick}>Search</GS.Button>
  );
}
