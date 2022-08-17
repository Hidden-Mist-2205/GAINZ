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
        <Nav.MenuItem to="/ExerciseLibrary">
          Exercise Library
        </Nav.MenuItem>
        <Nav.MenuItem to="/WorkoutLibrary">
          Workout Library
        </Nav.MenuItem>
        <Nav.MenuItem to="/FindWorkoutBuddy">
          Find Workout Buddy
        </Nav.MenuItem>

        <Nav.MenuItem to="/StartWorkout">
          Start Workout
        </Nav.MenuItem>
        <Nav.MenuItem to="/Profile">
          My Profile
        </Nav.MenuItem>

      </Nav.Sections>

      <Nav.UserIcon />
    </Nav.Container>
  );
}
