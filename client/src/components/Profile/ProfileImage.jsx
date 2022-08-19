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
  object-fit: contain;
  /* width: 200px;
  height: 200px; */
  > img {
    height: 120px;
  }
`;
