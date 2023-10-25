import { IAction } from './action';

export type GetSignInRequestAction = IAction & {
  userInfo: {
    email: string;
    password: string;
  };
};
