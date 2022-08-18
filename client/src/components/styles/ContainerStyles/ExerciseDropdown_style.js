import styled from 'styled-components';

const ED = {
  Body: styled.div`
    max-width: 90%;
    min-width: 555px;
    margin-left: 5%;
    left: 173px;
    top: 393px;
    margin-bottom: 15px;
    border-radius: 8px;
    background-color: #272727;
  `,
  Item: styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    -webkit-align-content: center;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
  `,
  Name: styled.div`
    width: 45%;
    font-size: 20px;
    text-align: left;
  `,
  Set: styled.div`
    font-size: 15px;
    width: 20%;
    text-align: left;
  `,
  Rep: styled.div`
    font-size: 15px;
    width: 20%;
    text-align: left;
  `,
  NoExercises: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 36px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;
  `,
  GifBody: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    min-width: 450px;
    width: fit-content;
    margin-left: 5%;
    left: 173px;
    top: 393px;
    margin-bottom: 15px;
    border-radius: 8px;
    background-color: #272727;
  `,
};

export default ED;
