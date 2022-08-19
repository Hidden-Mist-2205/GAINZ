import React from 'react';

import { FormTextBubble, StyledProfileText } from './Profile.styled';

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
    <FormTextBubble>
      <StyledProfileText>
        <label htmlFor={jsxName}>{`${label}:  `}</label>
        <input
          type={type}
          id={jsxName}
          required
          className="formField"
          value={userInfo[property]}
          onChange={(e) => changeHandler(e)}
        />
      </StyledProfileText>
    </FormTextBubble>
  );
}
