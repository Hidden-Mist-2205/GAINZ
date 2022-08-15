import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const FT = {
  Container: styled.div`
    display: flex;
    height: 120px;
    margin: 7% 0;
    align-items: center;
    align-content: center;
    flex-direction: column;
  `,
  MoreInfo: styled.div`
    display: flex;
    width: 80%;
    height: 50%;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(217 217 217 / 50%);
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    transition: 0.3s;
  `,
  InfoBox: styled.div`
    font-size: 12px;
    color: rgb(244 243 243 / 90%);
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  `,
  LogoBox: styled.div`
    color: #AE3139;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.8;
    }
  `,
  ShareOnSocial: styled.div`
    display: flex;
    margin-bottom: 3%;
    width: 80%;
    height: 50%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `,
  SocialIconContainer: styled.div`
    display: flex;
  `,
  A: styled.a`
    color: rgb(244 243 243 / 90%);
  `,

};

export default FT;
