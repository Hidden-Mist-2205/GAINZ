import React from 'react';

import GS from '../../styles/GeneralStyles';

export default function SearchButton({ handleClick, searchInput }) {
  return (
    <GS.Button onClick={() => handleClick(searchInput)}>Search</GS.Button>
  );
}
