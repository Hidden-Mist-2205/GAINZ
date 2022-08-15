import styled from 'styled-components';
import GS from '../GeneralStyles';

const DB = {
  Body: styled.div`
    margin-right: auto;
    max-width: 1500px;
    margin-left: auto;
  `,
  WOBody: styled.div`
    width: 80%;
    border-top: solid #121212;
    background: rgba(217, 217, 217, 0.15);
    max-height: 700px;
    min-height:500px;
    margin: auto;
    border-radius:0 8px 8px 8px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 10px;
        background-color: #272727;
        border: none;
    }
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
    padding-bottom: 50px;
    padding-left: 100px;
  `,

  Tabs: styled(GS.OutlinedBtn)`
    background: rgba(217, 217, 217, 0.15);
    color: white;
    min-width: 25%;
    min-height: 70px;
    font-size: 18px;
    border: none;
    border-radius: 5px 5px 0px 0px;
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
  WOCategory: styled.div`
    width: 188px;
    height: 36px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 36px;
  `,
  WODescription: styled.div`
    width: 188px;
    height: 36px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 36px;
  `,
  NavBtn: styled.div`
    float: right;
    padding-bottom: 10px;
  `,
  Previous: styled.button`
    font-size: 20px;
    color: white;
    border: none;
    background:none;
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
    margin-bottom: 10px;
    font-weight:bold;
    display: inline;
    cursor: pointer;
    &:hover {
      text-shadow: 0 0 3px gold;
    }
  `,
};
export default DB;
