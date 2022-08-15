import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import GS from './styles/GeneralStyles';

// import SamplePage from './Dashboard/SamplePage';
// import FindWorkoutBuddy from './FindWorkoutBuddy/FindWorkoutBuddy';
// import MyGainz from './MyGainz/MyGainz';
// import MyProfile from './MyProfile/MyProfile';
// import StartWorkout from './StartWorkout/StartWorkout';
// import UserLibrary from './UserLibrary/UserLibrary';

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const FindWorkoutBuddy = lazy(() => import('./FindWorkoutBuddy/FindWorkoutBuddy'));
const MyGainz = lazy(() => import('./MyGainz/MyGainz'));
const MyProfile = lazy(() => import('./MyProfile/MyProfile'));
const StartWorkout = lazy(() => import('./StartWorkout/StartWorkout'));
const ExerciseLibraryPage = lazy(() => import('./UserLibrary/ExerciseLibraryPage'));
const WorkoutLibraryPage = lazy(() => import('./UserLibrary/WorkoutLibraryPage'));

export default function GAINZ() {
  return (
    <GS.Background>
      <NavBar />
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/FindWorkoutBuddy" element={<FindWorkoutBuddy />} />
          <Route path="/MyGainz" element={<MyGainz />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/StartWorkout" element={<StartWorkout />} />
          <Route path="/UserExerciseLibrary" element={<ExerciseLibraryPage />} />
          <Route path="/UserWorkoutLibrary" element={<WorkoutLibraryPage />} />
        </Routes>
      </React.Suspense>
      <Footer />
      {/* <LogoutButton /> */}
    </GS.Background>
  );
}
