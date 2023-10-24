import React from 'react';
import { Container, Ads, FormContainer } from './styles';
import imgBack from 'assets/imgs/imgBack.jpg';

export const SignupView: React.FC = () => {
  return (
    <Container>
      <Ads src={imgBack} />
      <FormContainer></FormContainer>
    </Container>
  );
};
