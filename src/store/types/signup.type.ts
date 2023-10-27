import { IErrorType } from 'types';

export interface IAuthState {
  isAuthenticated: boolean;
  pending: boolean;
  token: string;
  error: IErrorType;
  user: any;
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
  phoneNumber: string;
  countryCode: string;
  displayName: string;
  callback: any;
}
