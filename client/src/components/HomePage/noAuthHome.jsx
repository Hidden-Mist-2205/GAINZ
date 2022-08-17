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
background-color: black;
width: 100vw;
height: 100%;
position: absolute;
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Nav.Container>
        <Nav.Logo> ⚛︎ GAINZ</Nav.Logo>
        <Nav.Sections>
          <GS.OutlinedBtn onClick={() => navigate('/login')}>Login</GS.OutlinedBtn>
          <GS.Button onClick={() => navigate('/signUp')}>Register</GS.Button>
        </Nav.Sections>
      </Nav.Container>
      <HomeBackground>
        <h1>Make Major Gainz.</h1>
        <GS.Button onClick={() => navigate('/signUp')}>Get Started</GS.Button>
      </HomeBackground>
    </>
  );
}
