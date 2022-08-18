import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Userfront from '@userfront/react';
import SU from '../styles/Signup_Style/SU';
import PasswordResetModal from './passwordResetModal';
import Nav from '../styles/NavStyle';
import HP from '../styles/Signup_Style/HP';

Userfront.init('rbvr4mqb');

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
    <HP.HomePageWrapper>
      <Nav.Container>
        <Nav.Logo> ⚛︎ GAINZ</Nav.Logo>
        <HP.HomeNavSection>
          <HP.HomeOutlineButton onClick={() => navigate('/login')}>Login</HP.HomeOutlineButton>
          <HP.HomeSolidButton onClick={() => navigate('/signUp')}>Register</HP.HomeSolidButton>
        </HP.HomeNavSection>
      </Nav.Container>
      <HP.HomeBackground>
        <HP.HomeOverlay>
          <SU.PageWrapper>
            {display ? <PasswordResetModal setDisplay={setDisplay} /> : null}
            <SU.WrapperDiv>
              <h2>Login</h2>
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
        </HP.HomeOverlay>
      </HP.HomeBackground>
    </HP.HomePageWrapper>
  );
}
