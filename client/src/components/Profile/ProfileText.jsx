import React from 'react';
import styled from 'styled-components';

export default function ProfileText({ text }) {
  return (
    <StyledProfileText>{text}</StyledProfileText>
  );
}

const StyledProfileText = styled.p`
  margin: 0;
  line-height: 1.8em;
`;
