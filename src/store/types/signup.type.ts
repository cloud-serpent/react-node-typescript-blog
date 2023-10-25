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
  name: string;
  password1: string;
  password2: string;
  callback: any;
}
