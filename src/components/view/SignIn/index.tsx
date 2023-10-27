import React, { ChangeEvent } from 'react';

import {
  CheckButton,
  CheckRemember,
  CheckTitle,
  Container,
  Content,
  HelpContent,
  HelpContentBold,
  HelpText,
  HelpTitle,
  HelpTitleContainer,
  HelpTitleLink,
  SubmitButton,
  SubmitContainer,
  SubmitHelpContainer,
  Title,
  Wrapper,
} from './style';
import { InputComponent } from 'components/common';

interface SignInViewProps {
  userInfo: { email: string; password: string };
  checkRemember: boolean;
  passwordState: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onChangeRemember: () => void;
  onChangePassword: () => void;
}

export const SignInView: React.FC<SignInViewProps> = (props) => {
  const { userInfo, checkRemember, passwordState } = props;

  return (
    <Wrapper>
      <Container>
        <Content>
          <Title>Sign In</Title>
          <InputComponent
            label="Email or phone number"
            type="text"
            name="email"
            value={userInfo.email}
            onChange={props.onChange}
          />
          <InputComponent
            label="Password"
            icon={
              passwordState ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  style={{ width: '20px', height: '20px', flexShrink: '0' }}
                  viewBox="0 0 16 16"
                >
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  style={{ width: '20px', height: '20px', flexShrink: '0' }}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              )
            }
            extraLabel={passwordState ? 'Hide' : 'Show'}
            name="password"
            type={passwordState ? 'password' : 'text'}
            value={userInfo.password}
            onChange={props.onChange}
            onChangeExtra={props.onChangePassword}
          />
          <SubmitContainer>
            <SubmitButton onClick={props.onSubmit}>Sign in</SubmitButton>
            <SubmitHelpContainer>
              <CheckRemember>
                <CheckButton onClick={props.onChangeRemember}>
                  {checkRemember ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      style={{ width: '20px', height: '20px' }}
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      style={{ width: '20px', height: '20px' }}
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  )}
                </CheckButton>
                <CheckTitle>Remember me</CheckTitle>
              </CheckRemember>
            </SubmitHelpContainer>
          </SubmitContainer>
        </Content>
        <HelpText>
          <HelpTitleContainer>
            <HelpTitle>Don't have an account?</HelpTitle>
            <HelpTitleLink to="/signup">Sign Up</HelpTitleLink>
          </HelpTitleContainer>
          <HelpContent>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <HelpContentBold to="/">Learn more.</HelpContentBold>
          </HelpContent>
        </HelpText>
      </Container>
    </Wrapper>
  );
};
