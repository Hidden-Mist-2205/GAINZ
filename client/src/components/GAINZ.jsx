import React, { lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Userfront from '@userfront/react';
import axios from 'axios';
import NavBar from './NavBar';
import Footer from './Footer';
import GS from './styles/GeneralStyles';
import { LogoutButton } from './Userfront/Userfront';
// import SamplePage from './Dashboard/SamplePage';
// import FindWorkoutBuddy from './FindWorkoutBuddy/FindWorkoutBuddy';
// import MyGainz from './MyGainz/MyGainz';
// import MyProfile from './MyProfile/MyProfile';
// import StartWorkout from './StartWorkout/StartWorkout';
// import UserLibrary from './UserLibrary/UserLibrary';

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const FindWorkoutBuddy = lazy(() => import('./FindWorkoutBuddy/FindWorkoutBuddy'));
const MyGainz = lazy(() => import('./MyGainz/MyGainz'));
const Profile = lazy(() => import('./Profile/Profile'));
const StartWorkout = lazy(() => import('./StartWorkout/StartWorkout'));
const ExerciseLibrary = lazy(() => import('./UserLibrary/ExerciseLibrary'));
const WorkoutLibrary = lazy(() => import('./UserLibrary/WorkoutLibrary'));

export default function GAINZ() {
  const [avatarUrl, setAvatarUrl] = useState('');
  axios.get('getAvatar', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Userfront.tokens.accessToken}`,
    },
  }).then((res) => {
    if (res.data[0].avatar_url) {
      setAvatarUrl(res.data[0].avatar_url);
    }
  }).catch((err) => {
    console.log(err);
  });
  return (
    <GS.Background>
      <NavBar avatarUrl={avatarUrl} />
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/FindWorkoutBuddy" element={<FindWorkoutBuddy />} />
          <Route path="/MyGainz" element={<MyGainz />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/StartWorkout" element={<StartWorkout />} />
          <Route path="/ExerciseLibrary" element={<ExerciseLibrary />} />
          <Route path="/WorkoutLibrary" element={<WorkoutLibrary />} />
        </Routes>
      </React.Suspense>
      <Footer />
    </GS.Background>
  );
}
