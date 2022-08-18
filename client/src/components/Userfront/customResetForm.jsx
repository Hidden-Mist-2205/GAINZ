import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Userfront from '@userfront/react';
import GS from '../styles/GeneralStyles';
import SU from '../styles/Signup_Style/SU';

Userfront.init('rbvr4mqb');

export default function PasswordResetForm() {
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  // const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (password === verifyPassword) {
      Userfront.resetPassword({
        password: verifyPassword,
      });
    } else {
      alert('Your password does not match.');
    }
  }

  return (
    <SU.PageWrapper>
      <SU.WrapperDiv>
        <h2>Reset Your Password</h2>
        <SU.Form onSubmit={(e) => { handleSubmit(e); }}>
          <SU.InputDiv>
            <label htmlFor="password">
              New Password:
              <SU.TextInput required id="password" type="password" value={password} onChange={((e) => setPassword(e.target.value))} />
            </label>
          </SU.InputDiv>
          <SU.InputDiv>
            <label htmlFor="verifyPassword">
              Confirm New Password:
              <SU.TextInput required id="verifyPassword" type="password" value={verifyPassword} onChange={((e) => setVerifyPassword(e.target.value))} />
            </label>
          </SU.InputDiv>
          <SU.SubmitButton style={{ width: '100%' }} type="submit">Reset Password</SU.SubmitButton>
        </SU.Form>
      </SU.WrapperDiv>
    </SU.PageWrapper>
  );
}
