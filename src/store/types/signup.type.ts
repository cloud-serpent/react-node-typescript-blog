import { User, ErrorType } from 'types';

export interface AuthState {
  isAuthenticated: boolean;
  pending: boolean;
  token: string;
  error: ErrorType;
  user: User;
}

export interface SignupSuccessPayload {
  token: string;
}

export interface SignupFailurePayload {
  error: ErrorType;
}

export interface SignupPayload {
  email: string;
  password: string;
  confirmpassword: string;
  phone: string;
  code: string;
  username: string;
  callback: any;
}
