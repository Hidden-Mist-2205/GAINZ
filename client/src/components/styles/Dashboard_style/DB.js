import styled from 'styled-components';

const DB = {
  Body: styled.div`
    position: absolute;
    width: 75%;
    min-width: 1445px;
    min-height: 1050px;
    left: 65px;
    top: 108px;
  `,
  WOBody: styled.div`
    width: 100%;
    background: rgba(217, 217, 217, 0.15);
    max-height: 700px;
    min-height:500px;
    border-radius:8px;
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
  `,

  WOHeader: styled.h3`
    display: inline;
    width: 484px;
    height: 52px;
    margin-left: 35px;
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
    width: 95%;
    height: 100px;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-right: auto;
    margin-left: 60px;
    border-radius:5px;
    background-color: #272727;
  `,
  WOStar: styled.span`
    display: inline-block;
    width: 20px;
    height: 36px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    position: relative;
    left: 5%;
    top: 29%;
    border:none;
    cursor: pointer;
    &:hover {
      text-shadow: 0 0 3px gold;
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
    cursor: pointer;
    &:hover {
      text-shadow: 0 0 3px gold;
    }
  `,
  WOExName: styled.div`
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
    font-size: 15px;
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
