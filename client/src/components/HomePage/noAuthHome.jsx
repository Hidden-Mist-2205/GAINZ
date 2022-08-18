import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../styles/NavStyle';
import HP from '../styles/Signup_Style/HP';

export default function Home() {
  const navigate = useNavigate();

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
          <HP.SloganWrapper>
            <h1>Make Major Gainz.</h1>
            <HP.HomeSolidButton onClick={() => navigate('/signUp')}>Get Started</HP.HomeSolidButton>
          </HP.SloganWrapper>
        </HP.HomeOverlay>
      </HP.HomeBackground>
    </HP.HomePageWrapper>
  );
}
