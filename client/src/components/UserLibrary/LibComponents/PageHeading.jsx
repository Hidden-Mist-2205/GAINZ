import React from 'react';
import styled from 'styled-components';

export default function PageHeading({ text }) {
  return (
    <StyledPageHeading>{text}</StyledPageHeading>
  );
}

const StyledPageHeading = styled.h2`
  font-weight: 400;
  font-size: 48px;
`;
