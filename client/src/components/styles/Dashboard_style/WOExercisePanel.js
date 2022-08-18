import styled from 'styled-components';

const WOEx = {
  Body: styled.div`
    max-width: 70%;
    min-width: 555px;
    min-height: 155px;
    margin-left: 8%;
    left: 173px;
    top: 393px;
    background-color: #272727;
  `,
  Item: styled.div`
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    align-items: baseline;
    padding-left: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
  `,
  Name: styled.div`
    font-size: 24px;
    min-width: 40%;

  `,
  Set: styled.div`
    font-size: 15px;
    padding-left: 100px;
  `,
  Rep: styled.div`
    font-size: 15px;
    padding-left: 100px;
    `,
  GifBody: styled.div`
    width: fit-content;
    background-color: #272727;
    margin-left: 7%;
    `,
  GIF: styled.img`
  min-width: 280;
  max-width: 280px;
  margin: auto;
  padding: 20px;
`,
};

export default WOEx;
