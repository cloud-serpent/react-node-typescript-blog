export * as Todos from './todos.type';

export * from './action';
export * as Auth from './auth';

export interface ResponseGenerator<DataType = unknown> {
  config?: unknown;
  data: DataType;
  headers?: unknown;
  request?: unknown;
  status?: number;
  statusText?: string;
}
