import styled from 'styled-components';
import GS from '../GeneralStyles';

const DB = {
  Body: styled.div`
    margin-right: auto;
    min-width: 90%;
    max-width: 1500px;
    margin-left: auto;
  `,
  WOBody: styled.div`
    width: 90%;
    background: rgba(217, 217, 217, 0.15);
    height: fit-content;
    padding-top: 15px;
    min-height:590px;
    margin: auto;
    border-radius:0 8px 8px 8px;
    overflow-y: fit-content;
    &::-webkit-scrollbar {
        width: 10px;
        background-color: #272727;
        border: none;
    }
  `,
  Header: styled.h1`
    width: 100%;
    height: 10%;
    font-style: normal;
    /* font-weight: 400; */
    font-size: 40px;
  `,

  Tabs: styled(GS.OutlinedBtn)`
    background: rgba(217, 217, 217, 0.15);
    color: white;
    width: 25%;
    min-width: 205px;
    min-height: 75px;
    font-size: 18px;
    border: none;
    border-radius: 8px 8px 0px 0px;
        &:hover {
      box-shadow: 2px -6px 5px rgb(241 229 229 / 87%);
      padding-bottom: 20px;
    }
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
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #F6BE00;
    border:none;
    cursor: pointer;
    &:hover {
      text-shadow: 0 0 20px gold;
    }
`,
  WOName: styled.div`
    width: 188px;
    height: 36px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    cursor: pointer;
    &:hover {
      text-shadow: 0 0 10px white;
    }
  `,
  WOExName: styled.div`
    width: 188px;
    height: 36px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
`,
  WOCategory: styled.div`
    width: 188px;
    height: 36px;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 36px;
  `,
  WODescription: styled.div`
    width: 188px;
    height: 36px;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 36px;
  `,
  NavBtn: styled.div`
    padding-bottom: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

  `,
  Previous: styled.button`
    font-size: 30px;
    color: white;
    border: none;
    background:none;
    margin-right: 60px;
    display: inline;
    font-weight:bold;
    cursor: pointer;
    &:hover {
      text-shadow: 0 0 10px white;
    }
  `,
  Next: styled.button`
    font-size: 30px;
    font-weight: bold;
    color: white;
    border: none;
    background:none;
    margin-right: 60px;
    margin-bottom: 10px;
    font-weight:bold;
    display: inline;
    cursor: pointer;
    &:hover {
      text-shadow: 0 0 10px white;
    }
  `,
};
export default DB;
