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
  WorkoutName: styled.h3`
    width: 90%;
    color: #ffffff;
  `,
  Description: styled.div`
    display: flex;
    margin: auto;
    width: 90%;
    height: 10%;
    padding: 40px 20px;
    background-color: #272727;
  `,
  FlexContainer: styled.div`
    display: flex;
    width: 93.5%;
    height: 65%;
    margin: auto;
  `,
  InnerContainer: styled.div`
    display: flex;
    width: 40%;
    height: 65%;
    margin: 40px 20px 40px 0px;
    padding: 40px 20px;
    background-color: #272727;
  `,
  ExerciseSelection: styled.div`
    display: flex;
    width: 10%;
    height: 65%;
    margin: 40px 0 40px 0;
    padding: 40px 20px;
    flex-direction: column;
    background-color: #272727;
  `,
};

export default SW;
