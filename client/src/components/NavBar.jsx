import React from 'react';
import Nav from './styles/NavStyle.js';

export default function NavBar() {
// something here to route to each section;

  return (
    <Nav.Container>
      <Nav.Logo> ⚛︎ Gainz</Nav.Logo>

      <Nav.Sections>
        <Nav.MenuItem>
          Dashboard
        </Nav.MenuItem>
        <Nav.MenuItem>
          My Gainz
        </Nav.MenuItem>
        <Nav.MenuItem>
          Library
        </Nav.MenuItem>
        <Nav.MenuItem>
          Find Workout Buddy
        </Nav.MenuItem>
      </Nav.Sections>

      <Nav.UserIcon />
    </Nav.Container>
  );
}
