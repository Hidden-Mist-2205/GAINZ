import React, { useState } from 'react';
import ProfileDropdown from './ProfileDropdown';
import Nav from './styles/NavStyle';

export default function NavBar() {
  const [isHovering, setIsHovering] = useState(false);

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
        <Nav.MenuItem to="/ExerciseLibrary">
          Exercise Library
        </Nav.MenuItem>
        <Nav.MenuItem to="/WorkoutLibrary">
          Workout Library
        </Nav.MenuItem>
        <Nav.MenuItem to="/FindWorkoutBuddy">
          Find Workout Buddy
        </Nav.MenuItem>

      </Nav.Sections>

      <Nav.UserIconContainer
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        <Nav.UserIcon />
        {isHovering && (
          <ProfileDropdown />
        )}
      </Nav.UserIconContainer>
    </Nav.Container>
  );
}
