import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AuthState,
  SignupFailurePayload,
  SignupPayload,
  SignupSuccessPayload,
} from 'store/types/signup.type';

const initialState: AuthState = {
  isAuthenticated: false,
  pending: false,
  token: '',
  error: {
    name: '',
    email: '',
    password: '',
    password2: '',
  },
  user: {
    name: '',
    email: '',
    role: 0,
  },
};

const signupSlice = createSlice({
  name: 'signup',
  initialState: initialState,
  reducers: {
    signupRequest(state: AuthState, action: PayloadAction<SignupPayload>) {
      state.pending = true;
    },
    signupSuccess(
      state: AuthState,
      action: PayloadAction<SignupSuccessPayload>
    ) {
      state.pending = false;
    },
    signupFailure(
      state: AuthState,
      action: PayloadAction<SignupFailurePayload>
    ) {
      state.pending = false;
      state.error = action.payload.error;
    },
  },
});

export const signupActions = signupSlice.actions;
export const signupReducers = signupSlice.reducer;
