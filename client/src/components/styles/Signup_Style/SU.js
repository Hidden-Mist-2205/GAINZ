import styled from 'styled-components';
import GS from '../GeneralStyles';

const SU = {
  TextInput: styled.input`
  width: 90%;
  padding: 12px 20px;
  margin: 5px;
  border-radius: 3px;
  border: 0px;
  display: block;
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
  margin: 5px;
  display: block;
  font-weight: 200;
  `,
  WrapperDiv: styled.div`
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  color: white;
  width: 490px;
  margin: auto;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #272727;
  `,
  CheckBoxDiv: styled.div`
  display: flex;
  flex-direction: row;
  `,
  FormBottom: styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
  padding: 5px;
  width: 70%;
  margin-top: 20px;
  `,
  PageWrapper: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  `,
  MiniButton: styled(GS.OutlinedBtn)`
  width: 100%;
  height: 30px;
  font-size: 10px;
  margin: 5px;
  padding: unset;
  `,
};

export default SU;
