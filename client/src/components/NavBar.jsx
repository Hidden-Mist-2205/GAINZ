import React from 'react';
import Nav from './styles/NavStyle';

export default function NavBar() {
// UserIcon dropdown and route to myProfile & logout

  return (
    <Nav.Container>
      <Nav.Logo> ⚛︎ GAINZ</Nav.Logo>

      <Nav.Sections>
        <Nav.MenuItem to="/Dashboard">
          Dashboard
        </Nav.MenuItem>
        <Nav.MenuItem to="/MyGainz">
          My Gainz
        </Nav.MenuItem>
        <Nav.MenuItem to="/UserLibrary">
          Library
        </Nav.MenuItem>
        <Nav.MenuItem to="/FindWorkoutBuddy">
          Find Workout Buddy
        </Nav.MenuItem>
      </Nav.Sections>

      <Nav.UserIcon />
    </Nav.Container>
  );
}
