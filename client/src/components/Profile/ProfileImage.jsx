import React from 'react';
import styled from 'styled-components';

export default function ProfileImage({ image }) {
  return (
    <ImageWrapper id="profileImage">
      <img
        src={image}
        alt="profile"
      />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  align-self: center;
  padding: 20px;
  > img {
    width: 100px;
    height: 100px;
  }
`;
