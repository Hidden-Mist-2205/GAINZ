import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Userfront from '@userfront/react';
import GS from '../styles/GeneralStyles';
import SU from '../styles/Signup_Style/SU';
import Nav from '../styles/NavStyle';
import PasswordResetModal from './passwordResetModal';

export default function LoginForm() {
  const [emailUsername, setEmailUsername] = useState('');
  const [pswd, setPswd] = useState('');
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    Userfront.login({
      method: 'password',
      emailOrUsername: emailUsername,
      password: pswd,
    }).catch((error) => {
      alert(error);
    });
  }

  return (
    <SU.PageWrapper>
      {display ? <PasswordResetModal setDisplay={setDisplay} /> : null}
      <SU.WrapperDiv>
        {/* <Nav.Logo> ⚛︎ GAINZ</Nav.Logo> */}
        <h1>Login</h1>
        <SU.Form onSubmit={(e) => { handleSubmit(e); }}>
          <SU.InputDiv>
            <label htmlFor="username">
              Email or Username
              <SU.TextInput required id="username" value={emailUsername} onChange={((e) => setEmailUsername(e.target.value))} />
            </label>
          </SU.InputDiv>
          <SU.InputDiv>
            <label htmlFor="password">
              Password
              <SU.TextInput required id="password" type="password" value={pswd} onChange={((e) => setPswd(e.target.value))} />
            </label>
          </SU.InputDiv>
          <SU.SubmitButton style={{ width: '100%' }} type="submit">Login</SU.SubmitButton>
        </SU.Form>
        <SU.FormBottom>
          <SU.MiniButton onClick={() => navigate('/signup')}>Sign Up</SU.MiniButton>
          <SU.MiniButton onClick={() => setDisplay(true)}> Forgot Password?</SU.MiniButton>
        </SU.FormBottom>
      </SU.WrapperDiv>
    </SU.PageWrapper>
  );
}
