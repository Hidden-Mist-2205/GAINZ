import styled from 'styled-components';
import Nav from '../NavStyle';
import GS from '../GeneralStyles';

const HP = {
  HomeBackground: styled.div`
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
  `,
  HomeOverlay: styled.div`
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
  `,
  HomeOutlineButton: styled(GS.OutlinedBtn)`
  min-width: 180px;
  margin-right: 10px;
  `,
  HomeSolidButton: styled(GS.Button)`
  min-width: 180px;
  `,
  HomeNavSection: styled(Nav.Sections)`
  width: 30%;
  right: 5%;
  left: unset;
  justify-content: flex-end;
  `,
  SloganWrapper: styled.div`
  width: max;
  height: max;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `,
  HomePageWrapper: styled.div`
  font-family: Trebuchet MS;
  `,
};

export default HP;
