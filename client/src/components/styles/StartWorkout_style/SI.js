import styled from 'styled-components';

const SI = {
  Header: styled.div`
    display: flex;
    width: 100%;
    margin: 0 0 30px 0;
    color: #aaa;
    align-items: center;
    justify-content: space-between;
  `,
  H4: styled.h4`
    margin-block: 0;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.7
    }
  `,
  GIF: styled.img`
    width: 60%;
    max-width: 280px;
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
