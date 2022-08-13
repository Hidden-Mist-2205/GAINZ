import { createRoot } from 'react-dom/client';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import {
  Login,
  Signup,
  PasswordReset,
  RequireAuth,
} from './components/Userfront/UserfrontComponents';

import GAINZ from './components/GAINZ';

const root = createRoot(document.getElementById('root'));

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={(
            <RequireAuth>
              <GAINZ />
            </RequireAuth>
          )}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password-reset" element={<PasswordReset />} />

      </Routes>
    </Router>
  );
}

root.render(<App />);
