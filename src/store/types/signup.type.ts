import { IUser, IErrorType } from 'types';

export interface IAuthState {
  isAuthenticated: boolean;
  pending: boolean;
  token: string;
  error: IErrorType;
  user: IUser;
}

export interface ISignupSuccessPayload {
  token: string;
}

export interface ISignupFailurePayload {
  error: IErrorType;
}

export interface ISignupPayload {
  email: string;
  password: string;
  confirmpassword: string;
  phone: string;
  code: string;
  username: string;
  callback: any;
}
