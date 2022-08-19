import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import LibraryDropdown from './LibraryDropdown';
import Nav from './styles/NavStyle';

export default function NavBar({ avatarUrl }) {
  const [userIconIsHovering, setUserIconIsHovering] = useState(false);
  const [userIconHeight, setUserIconHeight] = useState('70px');
  const [libraryIsHovering, setLibraryIsHovering] = useState(false);
  const [LibraryHeight, setLibraryHeight] = useState('20px');
  const [LibraryMarginTop, setLibraryMarginTop] = useState('8px');

  const onLibraryMouseOver = () => {
    setLibraryIsHovering(true);
    setLibraryHeight('130px');
    setLibraryMarginTop('118px');
  };
  const onLibraryMouseOut = () => {
    setLibraryIsHovering(false);
    setLibraryHeight('20px');
    setLibraryMarginTop('8px');
  };

  const onUserIconMouseOver = () => {
    setUserIconIsHovering(true);
    setUserIconHeight('150px');
  };
  const onUserIconMouseOut = () => {
    setUserIconIsHovering(false);
    setUserIconHeight('70px');
  };

  const navigate = useNavigate();

  return (
    <Nav.Container>
      <Nav.Logo onClick={() => navigate('/')}> ⚛︎ GAINZ</Nav.Logo>

      <Nav.Sections>
        <Nav.MenuItem to="/Dashboard">
          Dashboard
        </Nav.MenuItem>
        <Nav.MenuItem to="/MyGainz">
          My Gainz
        </Nav.MenuItem>

        <Nav.LibrarySelectionContainer
          onMouseOver={() => onLibraryMouseOver()}
          onMouseOut={() => onLibraryMouseOut()}
          height={LibraryHeight}
          marginTop={LibraryMarginTop}
        >
          <Nav.MenuItem to="/WorkoutLibrary">
            Library
          </Nav.MenuItem>
          {libraryIsHovering && (
            <LibraryDropdown />
          )}
        </Nav.LibrarySelectionContainer>

        <Nav.MenuItem to="/FindWorkoutBuddy">
          Find Workout Buddy
        </Nav.MenuItem>

      </Nav.Sections>

      <Nav.UserIconContainer
        onMouseOver={() => onUserIconMouseOver()}
        onMouseOut={() => onUserIconMouseOut()}
        height={userIconHeight}
      >
        <Nav.UserIcon avatarUrl={avatarUrl} />
        {userIconIsHovering && (
          <ProfileDropdown />
        )}
      </Nav.UserIconContainer>
    </Nav.Container>
  );
}
