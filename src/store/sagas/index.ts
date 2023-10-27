import { all, fork } from 'redux-saga/effects';
import auth from './auth';
import authSaga from './signup.saga';
import postsSaga from './posts.saga';

export function* appSaga() {
  yield all([fork(authSaga), ...auth, fork(postsSaga)]);
}
