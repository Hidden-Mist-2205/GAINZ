import styled from 'styled-components';

const GS = {
  Background: styled.div`
    width: 100vw;
    height: 100vh;
    font-family: "Trebuchet MS","Roboto","Arial",sans-serif;
    z-index: 0;
    background-color: #121212;
    color: #ffffff;
  `,
  PageHeader: styled.h1`
    margin: 20px 0;
    padding: 30px 7%;
    font-size: 40px;
    color: #ffffff;
  `,
  Button: styled.button`
    width: 12%;
    height: 52px;
    min-width: 120px;
    background-color: #AE3139;
    color: #ffffff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    border: 0;
    border-radius: 4px;
    padding: 6px 16px;
    cursor: pointer;
    vertical-align: middle;
    color: inherit;

    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;

    &:hover {
      box-shadow: 0 0 10px 3px rgb(241 229 229 / 67%);
    }
    /* &:after {
      content: "";
      background: #f0cece;
      display: block;
      position: absolute;
      width: inherit;
      height: inherit;
      padding-top: 100%;
      padding-left: 100%;
      margin-left: 0;
      margin-top: 0;
      opacity: 0;
      transition: all 0.8s;
    } */
    /* &:active:after {
      padding: inherit;
      margin: 0;
      opacity: 1;
      transition: 0s;
    } */
  `,
  OutlinedBtn: styled.button`
    display: inline-flex;
    width: 12%;
    height: 52px;
    min-width: 64px;
    background-color: #272727;
    color: #AE3139;
    position: relative;
    box-sizing: border-box;
    border: 1px solid #AE3139;
    border-radius: 4px;
    padding: 6px 16px;
    cursor: pointer;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
    &:hover {
      box-shadow: 0 0 10px 3px rgb(241 229 229 / 67%);
    }
  `,
};

export default GS;
