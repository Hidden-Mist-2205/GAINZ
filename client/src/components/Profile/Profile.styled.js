import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 720px;
  margin: 18px;
  border-radius: 8px;
  background-color:rgba(217,217,217,0.15);
`;

const ProfileFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 720px;
  border-radius: 8px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;
  background-color:rgba(217,217,217,0.15);
`;

const FormInfoContainer = styled.div`
border-radius: 8px;
background-color:rgba(217,217,217,0.15);
`;

const FormFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
`;

const StyledProfileText = styled.p`
  padding-left: 18px;
  > .label {
    color: darkgray;
  }
  > .value, input {
    margin-left: auto;
  }
`;

const FormTextBubble = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 360px;
  height: 60px;
  margin: 12px;
  border-radius: 50px;
  // border: 1px solid #ccc;
  background-color: #272727;
  > li {
    list-style: none;
  }
`;
const FormDayBubble = styled(FormTextBubble)`
  width: 120px;
  justify-content: center;
`;

export {
  ProfileContainer,
  ProfileFormContainer,
  FormContainer,
  FormFlexColumn,
  StyledProfileText,
  FormTextBubble,
  FormDayBubble,
  FormInfoContainer,
};
