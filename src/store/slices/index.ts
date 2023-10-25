import todosSlice, { todosActions } from './todos.slice';
import { signupReducers, signupActions } from './signup.slice';

export const Slices = {
  todos: todosSlice.reducer,
  signup: signupReducers,
};

export const Actions = {
  todos: todosActions,
  signup: signupActions,
};
