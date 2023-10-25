import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions } from 'store/slices';
import api from 'utils/api';
import { ResponseGenerator } from 'store/types';

export function* singupSaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () => await api().post('/users', action.payload)
    );
    if (result.data) {
      yield put(Actions.signup.signupSuccess(result.data.token));
    }
  } catch (e: any) {
    console.log(e);
    yield put(Actions.signup.signupFailure({ error: e.response.data.message }));
  }
}

function* authSaga() {
  yield takeLatest(Actions.signup.signupRequest, singupSaga);
}

export default authSaga;
