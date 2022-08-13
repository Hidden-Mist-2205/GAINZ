import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const Nav = {
  Container: styled.div`
    display: flex;
    height: 60px;
    background-color: #272727;
    align-items: center;
  `,
  Logo: styled.div`
    position: relative;
    left: 3%;
    width: 125px;
    height: 40px;
    vertical-align: middle;
    text-align: center;
    font-size: 30px;
    border-color: 1px solid grey;
    color: #AE3139;
    cursor: pointer;
  `,
  Sections: styled.div`
    display: flex;
    width: 60%;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    left: 20%;
    font-size: 10px;
  `,
  MenuItem: styled(Link)`
    text-transform: uppercase;
    text-decoration: unset;
    color: #ffffff;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  `,
  UserIcon: styled.div`
    position: absolute;
    left: 90%;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 1px solid white;
    background-color: #E5E5E5;

    &:hover {
      box-shadow: 0 0 10px 3px rgb(241 229 229 / 67%);
    }
  `,
};

export default Nav;