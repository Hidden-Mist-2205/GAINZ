import React from 'react';

import { LogoutButton } from './Userfront/Userfront';
import NavBar from './NavBar.jsx';
import GS from './styles/GeneralStyles.js';

export default function GAINZ() {
  return (
    <GS.Background>
      <NavBar />
      <div>
        GAINZ
      </div>
      <GS.Button>button</GS.Button>
      <GS.OutlinedBtn> outlined </GS.OutlinedBtn>
      <LogoutButton />
    </GS.Background>
  );
}
