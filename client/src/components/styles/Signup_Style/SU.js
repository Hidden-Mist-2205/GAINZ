import styled from 'styled-components';

const SU = {
  TextInput: styled.input`
  width: 80%;
  padding: 12px 20px;
  margin: 5px;
  border-radius: 3px;
  border: 0px;
  `,
  Form: styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `,
  InputDiv: styled.div`
  width: 100%;
  margin: auto;
  justify-content: center;
  `,
  WrapperDiv: styled.div`
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  color: white;
  width: 40vw;
  margin: auto;
  margin-top: 50px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #272727;
  border-radius: 5px;
  `,
  CheckBoxDiv: styled.div`
  display: flex;
  flex-direction: row;
  `,
};

export default SU;
