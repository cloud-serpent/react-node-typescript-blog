import { combineReducers } from '@reduxjs/toolkit';
import todosSlice, { todosActions } from './todos.slice';

import authSlice, { authActions } from './auth.slice';
import loadingSlice, { loadingActions } from './loading.slice';

export const Slices = combineReducers({
  todos: todosSlice.reducer,
  auth: authSlice.reducer,
  loading: loadingSlice.reducer,
});

export const Actions = {
  todos: todosActions,
  auth: authActions,
  loading: loadingActions,
};
