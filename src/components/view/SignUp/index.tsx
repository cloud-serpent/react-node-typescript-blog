import React from 'react';
import {
  Container,
  Ads,
  FormContainer,
  LogoUploader,
  Title,
  InputGroup,
  InputRowGroup,
  InputItem,
  InputTitle,
  InputSection,
  Submission,
} from './styles';
import imgBack from 'assets/imgs/imgBack.jpg';
import { Link } from 'react-router-dom';
import { PATH } from 'consts';

export const SignupView: React.FC = () => {
  return (
    <Container>
      <Ads src={imgBack} />
      <FormContainer>
        <LogoUploader src="#" />
        <Title>Create an Account</Title>
        <div>
          Already have an account?
          <Link to={PATH.NOT_FOUND}>Log in</Link>
        </div>
        <InputSection>
          <InputGroup>
            <InputTitle>Email Address</InputTitle>
            <InputItem type="email" />
          </InputGroup>
          <InputGroup>
            <InputTitle>Password</InputTitle>
            <InputItem type="password" />
          </InputGroup>
          <InputRowGroup>
            <InputGroup>
              <InputTitle>Phone Number</InputTitle>
              <InputItem type="text" />
            </InputGroup>
            <InputGroup>
              <InputTitle>Country code</InputTitle>
              <InputItem type="number" />
            </InputGroup>
          </InputRowGroup>
          <InputGroup>
            <InputTitle>Display Name</InputTitle>
            <InputItem type="text" />
          </InputGroup>
          <InputGroup>
            <InputTitle>Role</InputTitle>
            <InputItem type="text" />
          </InputGroup>
        </InputSection>
        <Submission type="submit">Submit</Submission>
      </FormContainer>
    </Container>
  );
};
