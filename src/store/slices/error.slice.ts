import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Errors } from '../types';

/* eslint-disable @typescript-eslint/no-unused-vars */
type ErrorState = {
  error: Object;
};

const initialState: ErrorState = {
  error: {},
};

const errorsSlice = createSlice({
  name: 'errors',
  initialState: initialState,
  reducers: {
    getErrors(state: ErrorState, action: PayloadAction<Errors.IGetError>) {
      state.error = action.payload.error;
    },
    clearErrors(state: ErrorState) {
      state.error = {};
    },
  },
});

export const errorsActions = errorsSlice.actions;

export default errorsSlice;
