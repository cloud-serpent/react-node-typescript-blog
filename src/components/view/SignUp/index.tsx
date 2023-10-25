import React, { ChangeEvent, useState } from 'react';
import {
  Container,
  Ads,
  FormContainer,
  Title,
  InputGroup,
  InputRowGroup,
  InputItem,
  InputTitle,
  InputSection,
  Submission,
} from './styles';
// import * as imgBack from 'assets/imgs/imgBack.jpg';
import { Link } from 'react-router-dom';
import { PATH } from 'consts';
import { UserModel } from 'models';

export const SignupView: React.FC = () => {
  const initialState: UserModel = {
    email: '',
    password: '',
    confirmpassword: '',
    phone: '',
    code: '',
    username: '',
  };

  const [userInfo, setUserInfo] = useState<UserModel>(initialState);

  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //Do Something here;
  };
  return (
    <Container>
      <Ads src="imgs/imgBack.jpg" />
      <FormContainer onSubmit={handleSubmit}>
        <Title>Create an Account</Title>
        <div>
          Already have an account?
          <Link to={PATH.LOG_IN}>Log in</Link>
        </div>
        <InputSection>
          <InputGroup>
            <InputTitle>Email Address</InputTitle>
            <InputItem
              type="email"
              value={userInfo.email}
              onChange={onChange}
            />
          </InputGroup>
          <InputGroup>
            <InputTitle>Password</InputTitle>
            <InputItem
              type="password"
              value={userInfo.password}
              onChange={onChange}
            />
          </InputGroup>
          <InputGroup>
            <InputTitle>Confirm Password</InputTitle>
            <InputItem
              type="password"
              value={userInfo.confirmpassword}
              onChange={onChange}
            />
          </InputGroup>
          <InputRowGroup>
            <InputGroup>
              <InputTitle>Phone Number</InputTitle>
              <InputItem
                type="text"
                value={userInfo.phone}
                onChange={onChange}
              />
            </InputGroup>
            <InputGroup>
              <InputTitle>Country code</InputTitle>
              <InputItem
                type="number"
                value={userInfo.code}
                onChange={onChange}
              />
            </InputGroup>
          </InputRowGroup>
          <InputGroup>
            <InputTitle>Display Name</InputTitle>
            <InputItem
              type="text"
              value={userInfo.username}
              onChange={onChange}
            />
          </InputGroup>
        </InputSection>
        <Submission type="submit">Submit</Submission>
      </FormContainer>
    </Container>
  );
};
