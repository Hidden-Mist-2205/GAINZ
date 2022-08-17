import { createRoot } from 'react-dom/client';
import React from 'react';
import { RecoilRoot } from 'recoil';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Userfront from '@userfront/core';
import Signup from './components/Userfront/customSignup';
import Home from './components/HomePage/noAuthHome';

import {
  Login,
  // Signup,
  PasswordReset,
  RequireAuth,
} from './components/Userfront/UserfrontComponents';

import GAINZ from './components/GAINZ';

const root = createRoot(document.getElementById('root'));

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              Userfront.tokens.accessToken ? (
                <RequireAuth>
                  <GAINZ />
                </RequireAuth>
              ) : <Home />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-reset" element={<PasswordReset />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

root.render(<App />);
