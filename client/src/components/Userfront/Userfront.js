import Userfront from '@userfront/react';

Userfront.init('rbvr4mqb');

// const SignupForm = Userfront.build({
//   toolId: 'onrbao',
// });

const LoginForm = Userfront.build({
  toolId: 'dbkodk',
});

const PasswordResetForm = Userfront.build({
  toolId: 'bkaomn',
});

const LogoutButton = Userfront.build({
  toolId: 'rdakmd',
});

export {
  // SignupForm,
  LoginForm,
  PasswordResetForm,
  LogoutButton,
};
