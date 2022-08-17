import React from 'react';
import Nav from './styles/NavStyle';

export default function LibraryDropdown() {
  return (
    <Nav.DropdownContainer style={{ width: '100px' }}>
      <Nav.DropdownRouteOption to="/WorkoutLibrary">
        Workout Library
      </Nav.DropdownRouteOption>
      <Nav.DropdownRouteOption to="/ExerciseLibrary">
        Exercise Library
      </Nav.DropdownRouteOption>
    </Nav.DropdownContainer>
  );
}
