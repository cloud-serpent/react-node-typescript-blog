import { all, fork } from 'redux-saga/effects';
// import { todosSaga } from './todos.saga';
import authSaga from './signup.saga';

export function* appSaga() {
  yield all([fork(authSaga)]);
}
