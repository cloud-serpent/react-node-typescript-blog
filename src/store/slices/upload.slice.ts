import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* eslint-disable @typescript-eslint/no-unused-vars */
type UploadState = {
  avatar: File | null;
};

const initialState: UploadState = {
  avatar: null,
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState: initialState,
  reducers: {
    uploadRequest(state: UploadState, action: PayloadAction<UploadState>) {},
  },
});

export const uploadActions = uploadSlice.actions;

export const uploadRedcuers = uploadSlice.reducer;
