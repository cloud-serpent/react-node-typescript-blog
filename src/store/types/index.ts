export * as Todos from './todos.type';

export * from './action';
export * as Auth from './auth';
export * as SignupTypes from './signup.type';

export interface ResponseGenerator {
  config?: any;
  data: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  error?: any;
}
