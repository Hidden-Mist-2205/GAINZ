import styled from 'styled-components';

const MG = {
  Body: styled.div`
    margin-right: auto;
    max-width: 1500px;
    margin-left: auto;
  `,
  WOBody: styled.div`
    width: 100%;
    border-top: solid #121212;
    background: rgba(217, 217, 217, 0.15);
    height: 550px;
    border-radius: 8px;
    overflow: scroll;
  `,
  Header: styled.h1`
    width: 300px;
    height: 10%;
    margin-left: 1%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;
    letter-spacing: -0.015em;
  `,
  WOHeader: styled.h3`
  display: inline;
  width: 484px;
  height: 5%;
  margin-left: 15px;
  margin-bottom: 0;
  padding-top:60px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.015em;
  `,
  WOPanel: styled.div`
  width: 100%;
  min-height: 100px;
  `,
  WOItem: styled.div`
    display: flex;
    width: 95%;
    height: 100px;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-right: auto;
    margin-left: auto;
    border-radius: 5px;
    background-color: #272727;
    -webkit-box-pack: start;
    justify-content: center;
    -webkit-align-content: center;
    align-items: center;
    justify-content: space-evenly;
  `,
  WOStar: styled.span`
    width: 25px;
    height: 36px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #F6BE00;
    border:none;
    cursor: pointer;
    &:hover {
      text-shadow: 0 0 3px gold;
    }
  `,
  WOName: styled.div`
  width: 188px;
  height: 36px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 3px gold;
  }
  `,
  WOExName: styled.div`
    width: 188px;
    height: 36px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
  `,
  WOTimesCompleted: styled.div`
    width: 188px;
    height: 36px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 36px;
  `,
  WOLastCompleted: styled.div`
    width: 288px;
    height: 36px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 36px;
  `,
  NavBtn: styled.div`
    float: right;
    padding-top: 10px;
    padding-bottom: 10px;
  `,
  Previous: styled.button`
    font-size: 20px;
    color: white;
    border: none;
    background: #272727;
    padding: 6px 32px 6px 32px;
    border-radius: 10%;
    margin-right: 60px;
    display: inline;
    font-weight:bold;
    cursor: pointer;
    &:hover {
      text-shadow: 0 0 3px gold;
    }
  `,
  Next: styled.button`
    font-size: 20px;
    color: white;
    border: none;
    background:none;
    margin-right: 60px;
    background: #272727;
    padding: 6px 32px 6px 32px;
    border-radius: 10%;
    margin-bottom: 10px;
    font-weight:bold;
    display: inline;
    cursor: pointer;
    &:hover {
      text-shadow: 0 0 3px gold;
    }
  `,
};

export default MG;
