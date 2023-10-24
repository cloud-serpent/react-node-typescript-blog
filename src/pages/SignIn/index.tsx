import { SignInView } from 'components';
import React from 'react';
import { WithLayout } from 'components';

const SignIn: React.FC = () => {
  return <SignInView />;
};

export const SignInPage = WithLayout(SignIn);
