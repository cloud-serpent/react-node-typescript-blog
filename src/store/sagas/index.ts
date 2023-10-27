import { all, fork } from 'redux-saga/effects';
import auth from './auth';
import authSaga from './signup.saga';

export function* appSaga() {
  yield all([fork(authSaga), ...auth]);
}
