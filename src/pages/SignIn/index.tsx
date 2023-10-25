import { SignInView } from 'components';
import React, { ChangeEvent, useState } from 'react';
import { WithLayout } from 'components';
import { useDispatch } from 'react-redux';
import { AppActions, AppDispatch } from 'store';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'consts';

interface UserInfoProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
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

  function onSubmit() {
    dispatch(
      AppActions.auth.signInRequest({
        userInfo: userInfo,
        next: () => {
          alert('sign in successfully');
          navigate(PATH.DASHBOARD);
        },
        errorAction: (errMsg) => {
          if (typeof errMsg === 'string') errMsg = [errMsg];
          errMsg.map((item: string) => {
            alert(item);
          });
          setUserInfo(initialState);
        },
      })
    );
  }

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
