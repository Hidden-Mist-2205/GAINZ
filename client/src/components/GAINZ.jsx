import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LogoutButton } from './Userfront/Userfront';
import NavBar from './NavBar';
import GS from './styles/GeneralStyles';
import SamplePage from './Dashboard/SamplePage';
import FindWorkoutBuddy from './FindWorkoutBuddy/FindWorkoutBuddy';
import MyGainz from './MyGainz/MyGainz';
import MyProfile from './MyProfile/MyProfile';
import StartWorkout from './StartWorkout/StartWorkout';
import UserLibrary from './UserLibrary/UserLibrary';

export default function GAINZ() {
  return (
    <GS.Background>
      <NavBar />
      <Routes>
        <Route path="/Dashboard" element={<SamplePage />} />
        <Route path="/FindWorkoutBuddy" element={<FindWorkoutBuddy />} />
        <Route path="/MyGainz" element={<MyGainz />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/StartWorkout" element={<StartWorkout />} />
        <Route path="/UserLibrary" element={<UserLibrary />} />
      </Routes>
      {/* <GS.Button>button</GS.Button>
      <GS.OutlinedBtn> outlined </GS.OutlinedBtn>
      <LogoutButton /> */}
    </GS.Background>
  );
}
