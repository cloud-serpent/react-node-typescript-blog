import { combineReducers } from '@reduxjs/toolkit';
import { signupReducers, signupActions } from './signup.slice';

import { authReducers, authActions } from './auth.slice';
import { loadingReducer, loadingActions } from './loading.slice';
import { postsRducers, postsActions } from './posts.slice';
import { errorReducers, errorsActions } from './error.slice';
import { uploadRedcuers, uploadActions } from './upload.slice';

export const Slices = combineReducers({
  auth: authReducers,
  signup: signupReducers,
  loading: loadingReducer,
  posts: postsRducers,
  errors: errorReducers,
  upload: uploadRedcuers,
});

export const Actions = {
  signup: signupActions,
  auth: authActions,
  loading: loadingActions,
  posts: postsActions,
  errors: errorsActions,
  upload: uploadActions,
};
