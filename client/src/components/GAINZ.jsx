import React from 'react';

import { LogoutButton } from './Userfront/Userfront';
import GS from './styles/GeneralStyles.jsx';

export default function GAINZ() {
  return (
    <GS.Background>
      <div>
        GAINZ
      </div>
      <LogoutButton />
    </GS.Background>
  );
}
