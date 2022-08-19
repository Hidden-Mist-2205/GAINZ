import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const Nav = {
  Container: styled.div`
    display: flex;
    height: 60px;
    background-color: #272727;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 2;
    borderBottom: 5px solid #121212;
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
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
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
    color: rgb(244 243 243 / 90%);
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      opacity: 0.8;
    }
  `,
  UserIconContainer: styled.div`
    position: absolute;
    left: 90%;
    top: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    height: ${props => props.height};
    /* height: 150px; */
  `,
  UserIcon: styled.img`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 1px solid white;
    background-color: ${props => props.avatarUrl ? 'unset' : '#E5E5E5' };
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: ${props => props.avatarUrl ? `url(${props.avatarUrl})` : 'unset'};
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 10px 3px rgb(241 229 229 / 67%);
    }
  `,
  DropdownContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    width: 60px;
    height: 80px;
    background-color: #272727;
    font-size: 12px;
    transition: transform .35s ease-in-out;
    box-shadow: 0 0 10px 3px rgb(241 229 229 / 67%);
  `,
  DropdownRouteOption: styled(Link)`
    color: white;
    font-size: 12px;
    text-decoration: unset;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `,
  DropdownOptions: styled.div`
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `,
  LibrarySelectionContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: ${props => props.marginTop};
    width: 80px;
    height: ${props => props.height};
  `,
};

export default Nav;
