import React, { useState, useEffect } from 'react';
import Userfront from '@userfront/react';
import GS from '../styles/GeneralStyles';
import SU from '../styles/Signup_Style/SU';
import ESM from '../styles/StartWorkout_style/ESM';

Userfront.init('rbvr4mqb');

export default function PasswordResetModal({ setDisplay }) {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    Userfront.sendResetLink(email);
    setSuccessMessage(true);
  }

  return (
    <ESM.Background>
      <ESM.Container style={{ height: 'unset' }}>
        <ESM.Xout onClick={() => setDisplay(false)}>X</ESM.Xout>
        <ESM.TextContainer>
          {successMessage ? (
            <ESM.Text>
              Please check your email for a password reset link
            </ESM.Text>
          ) : (
            <SU.Form onSubmit={(e) => { handleSubmit(e); }}>
              <SU.InputDiv>
                <label htmlFor="email">
                  <ESM.Text>
                    Request a password reset email
                  </ESM.Text>
                  <SU.TextInput required id="email" type="email" value={email} onChange={((e) => setEmail(e.target.value))} />
                </label>
                <SU.MiniButton type="submit">Send Reset Link</SU.MiniButton>
              </SU.InputDiv>
            </SU.Form>
          )}
        </ESM.TextContainer>
      </ESM.Container>
    </ESM.Background>
  );
}
