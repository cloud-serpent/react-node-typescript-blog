import React from 'react';
import {
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

export const SignInView: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Title>Sign In</Title>
          <InputComponent label={'Email or phone number'} />
          <InputComponent
            label={'Password'}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                style={{ width: '18px', height: '16px', flexShrink: '0' }}
              >
                <path
                  d="M17.0189 0.881092L16.283 0.145149C16.075 -0.0628416 15.691 -0.0308325 15.451 0.257113L12.8908 2.80108C11.7388 2.30514 10.4749 2.06514 9.14682 2.06514C5.1947 2.08107 1.77092 4.38504 0.122802 7.69725C0.0267743 7.90524 0.0267743 8.16117 0.122802 8.33716C0.890735 9.90518 2.04281 11.2012 3.48281 12.1772L1.38682 14.3051C1.14682 14.5451 1.11481 14.9291 1.27485 15.1371L2.0108 15.8731C2.21879 16.081 2.60277 16.049 2.84277 15.7611L16.8907 1.71321C17.1947 1.47334 17.2267 1.08938 17.0187 0.881366L17.0189 0.881092ZM9.99481 5.71298C9.7228 5.64896 9.43485 5.56901 9.16283 5.56901C7.80278 5.56901 6.71489 6.65703 6.71489 8.01694C6.71489 8.28895 6.77891 8.57689 6.85887 8.84892L5.78675 9.90495C5.4668 9.34499 5.29081 8.72089 5.29081 8.01697C5.29081 5.88899 7.00283 4.17697 9.13081 4.17697C9.83487 4.17697 10.4588 4.35295 11.0188 4.67291L9.99481 5.71298Z"
                  fill="#666666"
                  fill-opacity="0.8"
                />
                <path
                  d="M18.1714 7.69743C17.6114 6.57738 16.8753 5.56945 15.9634 4.75342L12.9874 7.69743V8.01738C12.9874 10.1454 11.2754 11.8574 9.14739 11.8574H8.82744L6.93945 13.7454C7.64351 13.8893 8.37946 13.9854 9.09946 13.9854C13.0516 13.9854 16.4754 11.6814 18.1235 8.35325C18.2675 8.12918 18.2675 7.90527 18.1714 7.69726L18.1714 7.69743Z"
                  fill="#666666"
                  fill-opacity="0.8"
                />
              </svg>
            }
            extraLabel={'Hide'}
          />
          <SubmitContainer>
            <SubmitButton>Sign in</SubmitButton>
            <SubmitHelpContainer>
              <CheckRemember>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ width: '24px', height: '24px' }}
                >
                  <g clip-path="url(#clip0_102_165)">
                    <path
                      d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                      fill="#111111"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_102_165">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
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
