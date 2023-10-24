import React, { useState } from 'react';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    console.log(phone);
    console.log(code);
    console.log(username);
    console.log(role);
  };
  return (
    <Container>
      <Ads src={imgBack} />
      <FormContainer onSubmit={handleSubmit}>
        <LogoUploader src="#" />
        <Title>Create an Account</Title>
        <div>
          Already have an account?
          <Link to={PATH.NOT_FOUND}>Log in</Link>
        </div>
        <InputSection>
          <InputGroup>
            <InputTitle>Email Address</InputTitle>
            <InputItem
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputTitle>Password</InputTitle>
            <InputItem
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <InputRowGroup>
            <InputGroup>
              <InputTitle>Phone Number</InputTitle>
              <InputItem
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputTitle>Country code</InputTitle>
              <InputItem
                type="number"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </InputGroup>
          </InputRowGroup>
          <InputGroup>
            <InputTitle>Display Name</InputTitle>
            <InputItem
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputTitle>Role</InputTitle>
            <InputItem
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </InputGroup>
        </InputSection>
        <Submission type="submit">Submit</Submission>
      </FormContainer>
    </Container>
  );
};
