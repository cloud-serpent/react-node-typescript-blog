import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserModel } from 'models';

interface AuthState {
  token: string | null;
  user: UserModel | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    signInRequest(state: AuthState, action: Object) {},

    setToken(state: AuthState, action: PayloadAction<any>) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem('token', action.payload.token);
    },
    getUser(state: AuthState) {},
    getUserSuccess(state: AuthState, action: PayloadAction<UserModel>) {
      state.user = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
