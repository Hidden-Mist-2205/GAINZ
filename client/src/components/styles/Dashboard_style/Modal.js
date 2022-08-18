import styled from 'styled-components';

const M = {
  Background: styled.div`
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
  `,
  PopUp: styled.div`
    max-width: 1000px;
    max-height: 700px;
    width: 50%;
    height: 85%;
    box-shadow: 0 5px 16pxrgba(0,0,0,0.2);
    background: #272727;
    color: #000;
    display: flex;
    position: fixed;
    z-index: 1000;
    border-radius: 5px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 10px;
        background-color: #272727;
        border: none;
    }
  `,
  Form: styled.form`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    margin: auto;
    flex-wrap: nowrap;
    align-content: center;
  `,
  CloseButton: styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
    border:none;
    background:none;
    font-weight:bold;
    font-size: 25px;
    color: white;
    &:hover {
      text-shadow: 0 0 5px white;
    }
  `,
  Label: styled.label`
    float: left;
    display: inline;
    height: 46px;
    width: 300px;
    font-size: 20px;
    color: white;
  `,
  Select: styled.select`
    float: right;
    margin-bottom: 20px;
    display: inline;
    color: white;
    height: 46px;
    width: 300px;
    background: rgba(217, 217, 217, 0.15);
  `,
  Input: styled.input`
    float: right;
    margin-bottom: 20px;
    display: inline;
    height: 46px;
    width: 300px;
    background: rgba(217, 217, 217, 0.15);
`,
  Description: styled.input`
    float: right;
    margin-bottom: 50px;
    display: inline;
    height: 46px;
    width: 300px;
    background: rgba(217, 217, 217, 0.15);
  `,
  Column: styled.div`
  `,
  Option: styled.option`
    color: white;
    /* background: grey; */
    background: rgba(217, 217, 217);
    width:;
    height:100%;
  `,
  Exercise: styled.div`
    display: flex;
    color: white;
    width: 60%;
    margin-bottom: 10px;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    /* display: -ms-flexbox; */
    /* display: flex; */
    /* flex-direction: row; */
    align-items: center;
    justify-content: space-around;
  `,
};
export default M;
