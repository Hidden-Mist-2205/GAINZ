import styled from 'styled-components';

const ESM = {
  Background: styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    padding: 10px;
    left: 0;
    top: 0;
    background-color: rgb(0 0 0 / 72%);
    justify-content: center;
    align-items: center;
    z-index: 10;
  `,
  Container: styled.div`
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    width: 30%;
    height: 20%;
    max-width: 500px;
    padding: 25px;
    background-color: #272727;
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
  Xout: styled.div`
    display: inline-block;
    float: right;
    position: relative;
    left: 50%;
    width: 30px;
    height: 30px;
    font-size: 20px;
    z-index: 10;
    cursor: pointer;
  `,
  TextContainer: styled.div`
    width: 80%;
    height: 20%;
  `,
  Text: styled.div`
    text-align: center;
  `,
};

export default ESM;
