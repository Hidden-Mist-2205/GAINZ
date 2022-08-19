import React from 'react';

import styled from 'styled-components';

import { FormTextBubble, styledFormInput } from './Profile.styled';

export default function FormInput({
  userInfo,
  setUserInfo,
  label,
  property,
  type,
}) {
  const jsxName = `edit${label}`;
  const changeHandler = (e) => {
    setUserInfo({ ...userInfo, [property]: e.target.value });
  };
  return (
    <InputFormTextBubble>
      <label htmlFor={jsxName}>{`${label}:  `}</label>
      <input
        type={type}
        id={jsxName}
        required
        className="formField"
        value={userInfo[property]}
        onChange={(e) => changeHandler(e)}
      />
    </InputFormTextBubble>
  );
}

const InputFormTextBubble = styled(FormTextBubble)`
  justify-content: space-between;
  padding 0px 22px;
  > label {
    color: darkgray;
  }
`;
