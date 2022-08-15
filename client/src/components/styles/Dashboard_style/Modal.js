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
    width: 1000px;
    height: 700px;
    box-shadow: 0 5px 16pxrgba(0,0,0,0.2);
    background: #272727;
    color: #000;
    display: flex;
    position: fixed;
    z-index: 1000;
    border-radius: 5px;
    overflow: auto;
  `,
  Form: styled.form`
    width: 1200px;
    height: 700px;
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
    font-size: 25px;
    color: white;
    &:hover {
      text-shadow: 0 0 3px gold;
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
  Exercise: styled.select`
    float: right;
    margin-bottom: 20px;
    display: inline;
    color: white;
    height: 46px;
    width: 300px;
    background: rgba(217, 217, 217, 0.15);
  `,
  Category: styled.select`
    float: right;
    margin-bottom: 20px;
    color: white;
    display: inline;
    height: 46px;
    width: 300px;
    background: rgba(217, 217, 217, 0.15);
  `,
  Url: styled.input`
    float: right;
    margin-bottom: 20px;
    display: inline;
    height: 46px;
    width: 300px;
    background: rgba(217, 217, 217, 0.15);
`,
  Description: styled.textarea`
    float: right;
    margin-bottom: 50px;
    display: inline;
    height: 100px;
    width: 300px;
    background: rgba(217, 217, 217, 0.15);
  `,
  Column: styled.div`
  `,
  Option: styled.option`
    color: white;
    background: grey;
  `,
};
export default M;