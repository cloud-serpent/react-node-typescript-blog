import todosSlice, { todosActions } from './todos.slice';
import { signupReducers, signupActions } from './signup.slice';
import { combineReducers } from '@reduxjs/toolkit';

export const Slices = combineReducers({
  todos: todosSlice.reducer,
  signup: signupReducers,
});

export const Actions = {
  todos: todosActions,
  signup: signupActions,
};
