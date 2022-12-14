import styled from 'styled-components';

const Container = {
  Body: styled.div`
    margin-right: auto;
    width: 100%
    max-width: 1500px;
    margin-left: auto;
  `,
  WOBody: styled.div`
    width: 80%;
    min-width: 585px;
    margin: 0 auto;
    border-top: solid #121212;
    background: rgba(217, 217, 217, 0.15);
    height: 525px;
    border-radius: 8px;
    padding-bottom: 10px;
    height: fit-content;
  `,
  SearchBarContainer: styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  `,
  SearchBar: styled.input`
    margin-right: 20px;
    margin-left: 20px;
    width: 35%;
    height: 45px;
    border-radius: 5px;
    background-color: #272727;
    color: white;
  `,
  WOHeader: styled.h3`
    display: inline;
    width: 484px;
    height: 5%;
    margin-left: 10%;
    margin-bottom: 0;
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
    /* justify-content: center; */
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
      text-shadow: 0 0 3px gold;
    }
  `,
  WOName: styled.div`
    width: 27%;
    height: 36px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    cursor: pointer;
    &:hover {
      text-shadow: 0 0 3px gold;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  WOCategory: styled.div`
    width: 15%;
    height: 36px;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 36px;
    color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  WODescription: styled.div`
    width: 23%;
    height: 36px;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  PageNumber: styled.span`
    display: inline;
    font-size: 25px;
    margin: 2px 20px;
  `,
  NoWorkouts: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 36px;
    padding-top: 10px;
    padding-bottom: 5px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;
  `,
  LibraryLink: styled.a`
    text-decoration: none;
    color: inherit;
    &:hover {
      text-shadow: 0 0 3px gold;
    }
  `,
  ChangeCategory: styled.select`
    margin-right: 20px;
    width: 10%;
    height: 45px;
    border-radius: 5px;
    background-color: #272727;
    color: white;
  `,
};

export default Container;
