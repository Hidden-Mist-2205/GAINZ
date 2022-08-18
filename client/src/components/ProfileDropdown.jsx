import React from 'react';
import Userfront from '@userfront/core';
import Nav from './styles/NavStyle';

export default function ProfileDropdown() {
  const onClickLogout = (e) => {
    e.preventDefault();
    Userfront.logout();
  };

  return (
    <Nav.DropdownContainer>
      <Nav.DropdownRouteOption to="/Profile">
        My Profile
      </Nav.DropdownRouteOption>
      <Nav.DropdownOptions>
        <Nav.DropdownOptions onClick={(e) => onClickLogout(e)}>
          Log Out
        </Nav.DropdownOptions>
      </Nav.DropdownOptions>
    </Nav.DropdownContainer>
  );
}
