import React from 'react';
import { StyledProfileText, FormTextBubble } from './Profile.styled';

export default function ProfileText({ label, text }) {
  return (
    <FormTextBubble>
      <StyledProfileText>
        <span className="label">{`${label}:  `}</span>
        <span>{text}</span>
      </StyledProfileText>
    </FormTextBubble>
  );
}
