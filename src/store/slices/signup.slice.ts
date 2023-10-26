import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IAuthState,
  ISignupFailurePayload,
  ISignupPayload,
  ISignupSuccessPayload,
} from 'store/types/signup.type';

const initialState: IAuthState = {
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
    signupRequest(state: IAuthState, action: PayloadAction<ISignupPayload>) {
      state.pending = true;
    },
    signupSuccess(
      state: IAuthState,
      action: PayloadAction<ISignupSuccessPayload>
    ) {
      state.pending = false;
    },
    signupFailure(
      state: IAuthState,
      action: PayloadAction<ISignupFailurePayload>
    ) {
      state.pending = false;
      state.error = action.payload.error;
    },
  },
});

export const signupActions = signupSlice.actions;
export const signupReducers = signupSlice.reducer;
