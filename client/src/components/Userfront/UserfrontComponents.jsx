import React from 'react';
import Userfront from '@userfront/react';
import {
  Navigate,
  useLocation,
} from 'react-router-dom';
import SignupForm from './customSignup';
import LoginForm from './customLogin';
import PasswordResetForm from './customResetForm';

Userfront.init('rbvr4mqb');

function Login() {
  const location = useLocation();
  if (Userfront.tokens.accessToken) {
    return (
      <Navigate to="/" state={{ from: location }} replace />
    );
  }
  return (
    <LoginForm />
  );
}

function Signup() {
  return (
    <SignupForm />
  );
}

function PasswordReset() {
  return (
    <PasswordResetForm />
  );
}

function NotFound() {
  return (
    <div id="404">
      <h2>404 Page not found</h2>
    </div>
  );
}

function RequireAuth({ children }) {
  const location = useLocation();
  if (!Userfront.tokens.accessToken) {
    return (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }
  return children;
}

export {
  Login,
  Signup,
  PasswordReset,
  NotFound,
  RequireAuth,
};
