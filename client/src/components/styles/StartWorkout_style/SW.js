import styled from 'styled-components';

const SW = {
  Header: styled.h1`
    padding: 30px 3%;
    color: #ffffff;
  `,
  FlexDiv: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10%;
    margin-bottom: 10px;
  `,
  Container: styled.div`
    display: flex;
    margin: auto;
    width: 80%;
    height: 70%;
    /* height: fit-content; */
    /* min-height: 50%; */
    background-color: #272727;
    background: rgba(217,217,217,0.15);
    padding: 20px;
    justify-content: center;
  `,
  Description: styled.div`
    display: flex;
    width: 90%;
    height: 20%;
    padding: 40px 20px;
    background-color: #272727;
    background: #272727;
  `,
};

export default SW;
