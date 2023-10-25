import React from 'react';
import { SignupView, WithLayout } from 'components';

const SignUp: React.FC = () => {
  return <SignupView />;
};

export const SignUpPage = WithLayout(SignUp);
