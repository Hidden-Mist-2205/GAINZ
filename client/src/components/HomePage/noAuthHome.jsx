import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Nav from '../styles/NavStyle';
import GS from '../styles/GeneralStyles';

const HomeBackground = styled.div`
  width: 100vw;
  height: 90vh;
  background-image: url(https://images.unsplash.com/photo-1623874514711-0f321325f318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeOverlay = styled.div`
background-color: rgba(0, 0, 0, 0.7);
width: 100vw;
height: 100%;
display: flex;
z-index: 10;
flex-direction: column;
align-items: center;
justify-content: center;
color: #ffffff;
font-size: 35px;
`;

const HomeOutlineButton = styled(GS.OutlinedBtn)`
min-width: 180px;
margin-right: 10px;
`;
const HomeSolidButton = styled(GS.Button)`
min-width: 180px;
`;

const HomeNavSection = styled(Nav.Sections)`
width: 30%;
right: 5%;
left: unset;
justify-content: flex-end;
`;

const SloganWrapper = styled.div`
width: max;
height: max;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const HomePageWrapper = styled.div`
font-family: Trebuchet MS;
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <HomePageWrapper>
      <Nav.Container>
        <Nav.Logo> ⚛︎ GAINZ</Nav.Logo>
        <HomeNavSection>
          <HomeOutlineButton onClick={() => navigate('/login')}>Login</HomeOutlineButton>
          <HomeSolidButton onClick={() => navigate('/signUp')}>Register</HomeSolidButton>
        </HomeNavSection>
      </Nav.Container>
      <HomeBackground>
        <HomeOverlay>
          <SloganWrapper>
            <h1>Make Major Gainz.</h1>
            <HomeSolidButton onClick={() => navigate('/signUp')}>Get Started</HomeSolidButton>
          </SloganWrapper>
        </HomeOverlay>
      </HomeBackground>
    </HomePageWrapper>
  );
}
