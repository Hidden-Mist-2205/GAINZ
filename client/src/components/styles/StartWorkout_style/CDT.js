import styled from 'styled-components';

const CDT = {
  Header: styled.h4`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  TimerContainer: styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
  `,
  Timer: styled.div`
    font-family: "Montserrat";
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  TimerText: styled.div`
    color: #aaa;
  `,
  TimerValue: styled.div`
    font-size: 40px;
    color: inherit;
  `,
  Setup: styled.div`
    display: flex;
    height: 20%;
    align-items: center;
    flex-direction: column;
  `,
  FlexRow: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  TimeInput: styled.input`
    background-color: #aaa;
    width: 10%;
  `,
  TextDiv: styled.div`
    padding: 10px;
  `,
  Controller: styled.div`
    color: #AE3139;
    cursor: pointer;
    padding: 10px 30px;
    font-size: 20px;
    &:hover {
      opacity: 0.7;
    }
  `,
  ButtonRow: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
};

export default CDT;
