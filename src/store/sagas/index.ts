import { all } from 'redux-saga/effects';
import auth from './auth';

export function* appSaga() {
  yield all([...auth]);
}
