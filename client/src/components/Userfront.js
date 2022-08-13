import Userfront from '@userfront/react';

Userfront.init('XXX');

const SignupForm = Userfront.build({
  toolId: 'XX'
});

const LoginForm = Userfront.build({
  toolId: 'XX'
});

const PasswordResetForm = Userfront.build({
  toolId: 'XX'
});

const LogoutButton = Userfront.build({
  toolId: 'XX'
});

export {
  SignupForm,
  LoginForm,
  PasswordResetForm,
  LogoutButton
};
