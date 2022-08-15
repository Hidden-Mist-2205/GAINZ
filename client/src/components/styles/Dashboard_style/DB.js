import styled from 'styled-components';

const DB = {
  Body: styled.div`
    position: absolute;
    width: 75%;
    min-width: 1445px;
    min-height: 1445px;
    left: 65px;
    top: 108px;
  `,
  WOBody: styled.div`
    padding-top: 0.1%;
    width: 100%;
    background: rgba(217, 217, 217, 0.15);
    height: 680px;
    overflow: hidden;
  `,
  Header: styled.h1`
    width: 750px;
    height: 10%;
    margin-left: 1%;
    margin-top: 50px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;
    letter-spacing: -0.015em;
  `,
  WOHeader: styled.h3`
    width: 484px;
    height: 52px;
    margin-left: 35px;
    margin-top: 35px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.015em;
  `,
  CreateWOBtn: styled.button`
    min-width: 125px;
    height: 3%;
    display: flex;
    font-family: 'Montserrat';
    color: #cc1313;
    font-size: 15px;
    float: right;
    margin-right: 5%;
    background: none;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    border-color: #d31616;
    `,
  WOPanel: styled.div`
    width: 95%;
    height: 15%;
    margin-top: 2%;
    margin-bottom: 5%;
    margin-right: auto;
    margin-left: auto;
    background-color: #272727;
  `,
  WOStar: styled.div`
    display: inline-block;
    width: 15px;
    height: 36px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    position: relative;
    left: 5%;
    top: 29%;
    &:hover {
      cursor: pointer;
    }
`,
  WOName: styled.div`
    display: inline-block;
    width: 188px;
    height: 36px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    position: relative;
    left: 10%;
    top: 29%;
  `,
  WOCategory: styled.div`
    display: inline-block;
    width: 188px;
    height: 36px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
    position: relative;
    left: 17%;
    top: 29%;
  `,
  WODescription: styled.div`
    display: inline-block;
    width: 188px;
    height: 36px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 36px;
    position: relative;
    left: 20%;
    top: 29%;
  `,
  WOStartBtn: styled.button`
    display: inline-block;
    width: 100px;
    font-size: 15px;
    height: 30px;
    position: relative;
    left: 45%;
    border-radius: 8px;
    color: white;
    background: #a82525;
    top: 29%;
    &:hover {
      cursor: pointer;
    }
  `,

  WOExercise: styled.div`
    width: 638px;
    height: 155px;
    margin-bottom: 5%;
    margin-left: 8%;
    left: 173px;
    top: 393px;
    background-color: #272727;
  `,
};

export default DB;
