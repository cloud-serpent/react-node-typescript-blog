import { call, put, takeLatest } from 'redux-saga/effects';
import { ResponseGenerator } from 'store/types';
import { AppActions } from 'store/store';
import api from 'utils/api';

function* getUploadRequest(action: any) {
  try {
    yield put(AppActions.loading.setLoading());
    const avatar = new FormData();
    avatar.append('avatar', action.payload.avatar);
    console.log(action.payload.avatar);
    const response: ResponseGenerator = yield call(
      async () => await api(true).post('/upload', avatar)
    );
    if (response) yield put(AppActions.loading.finishLoading());
  } catch (e: any) {
    yield put(AppActions.errors.getErrors(e.response.data.message));
  }
}

function* uploadSaga(): Generator<unknown> {
  yield takeLatest(AppActions.upload.uploadRequest, getUploadRequest);
}

export default uploadSaga;
