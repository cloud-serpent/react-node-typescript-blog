import { SignInView } from 'components';
import React, { ChangeEvent, useState } from 'react';
import { WithLayout } from 'components';

interface UserInfoProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const initialState: UserInfoProps = {
    email: '',
    password: '',
  };
  const [userInfo, setUserInfo] = useState<UserInfoProps>(initialState);
  const [checkRemember, setCheckRemember] = useState<boolean>(true);
  const [passwordState, setPasswordState] = useState<boolean>(true);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  function onChangeRemember() {
    setCheckRemember(!checkRemember);
  }

  function onChangePassword() {
    setPasswordState(!passwordState);
  }

  function onSubmit() {}

  return (
    <SignInView
      userInfo={userInfo}
      checkRemember={checkRemember}
      passwordState={passwordState}
      onChange={onChange}
      onSubmit={onSubmit}
      onChangeRemember={onChangeRemember}
      onChangePassword={onChangePassword}
    />
  );
};

export const SignInPage = WithLayout(SignIn);
