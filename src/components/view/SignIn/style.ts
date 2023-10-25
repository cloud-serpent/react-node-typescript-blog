import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 80px 40px;
  border-radius: 24px;
  background-color: #fff;
  align-self: center;
  width: 539px;
  box-shadow: 0px 0px 8px 2px #888888;
  @media (max-width: 1024px) {
    padding: 60px 30px;
    border-radius: 20px;
    width: 500px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 64px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  gap: 32px;
`;

export const Title = styled.h1`
  color: #333;

  text-align: center;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const SubmitButton = styled.button`
  display: flex;
  width: 459px;
  height: 56px;
  padding: 14px 0px 15px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  opacity: 0.25;
  background: #111;

  &:hover {
    background: #333;
  }

  color: #fff;

  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SubmitHelpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckRemember = styled.div`
  display: flex;
  padding: 8px 8px 8px 0px;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
`;

export const CheckButton = styled.button`
  width: 20px;
  height: 20px;
  &:hover {
    backgroud: #333;
  }
`;

export const CheckTitle = styled.p`
  color: #333;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HelpText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const HelpTitleContainer = styled.div`
  display: flex;
  padding: 2px;
  align-items: flex-start;
  gap: 5px;
`;

export const HelpTitle = styled.p`
  color: #666;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HelpTitleLink = styled(Link)`
  color: #111;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
`;

export const HelpContent = styled.p`
  color: #666;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HelpContentBold = styled(Link)`
  color: #000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
