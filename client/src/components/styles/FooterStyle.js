import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const FT = {
  Container: styled.div`
    display: flex;
    height: 120px;
    margin: 20px 0;
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
};

export default FT;
