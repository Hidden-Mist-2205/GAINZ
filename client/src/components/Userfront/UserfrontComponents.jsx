import React from 'react';
import Userfront from '@userfront/react';
import {
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';

import {
  SignupForm,
  LoginForm,
  PasswordResetForm,
} from './Userfront.js';

Userfront.init('rbvr4mqb');

function Login() {
  const location = useLocation();
  if (Userfront.tokens.accessToken) {
    return (
      <Navigate to="/" state={{ from: location }} replace />
    );
  }
  return (
    <div id="login">
      <LoginForm />
      <div className="authFooter">
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

function Signup() {
  return (
    <div id="signup">
      <SignupForm />
      <div className="authFooter">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

function PasswordReset() {
  return (
    <div id="reset">
      <PasswordResetForm />
    </div>
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
