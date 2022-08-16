import styled from 'styled-components';

const SI = {
  Instruction: styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 15px;
  `,
  H4: styled.h4`
    margin-block: 0;
  `,
  GIF: styled.img`
    width: 60%;
    margin: auto;
  `,
  ExerciseSelection: styled.div`
    display: flex;
    width: 10%;
    height: 65%;
    margin: 40px 0 40px 0;
    padding: 40px 20px;
    flex-direction: column;
    background-color: #272727;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
  `,
  Step: styled.div`
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  `,
};

export default SI;
