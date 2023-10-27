import styled from 'styled-components';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  box-shadow: 1px 1px 2px rgba(0.3, 0.3, 0.3, 0.4);
  height: 800px;
  max-width: 1000px;
  transition: 0.3s;
  border-radius: 20px;
  display: grid;
  grid-template-columns: auto 650px;
  &:hover {
    box-shadow: 1px 1px 8px rgba(0.3, 0.3, 0.3, 0.5);
  }

  overflow: hidden;
`;

export const Ads = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FormContainer = styled.form`
  padding: 64px 72px 56px 72px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin-top: 20px;
`;

export const LogoUploader = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: darkgray;
`;

export const Title = styled.p`
  font-size: 1.5em;
  font-weight: 600;
  margin: 0;
`;

export const InputSection = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2px;
`;

export const InputRowGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% auto;
  gap: 10px;
`;

export const InputTitle = styled.div`
  color: darkgray;
`;

export const InputItem = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border: 1px solid gray;
  outline: none;
  padding: 0px 12px;
  &:focus {
    border: 1px solid darkgray;
  }
`;

export const Submission = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border: none;
  outline: none;
  text-align: center;
  margin-top: 20px;
  background: rgb(255, 154, 154);
  background: linear-gradient(
    55deg,
    rgba(255, 154, 154, 1) 0%,
    rgba(255, 108, 200, 1) 35%,
    rgba(255, 151, 174, 1) 100%
  );
  color: white;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background: rgb(185, 185, 185);
    box-shadow: 1px 1px 4px rgb(0.2, 0.2, 0.2, 0.4);
  }
`;
