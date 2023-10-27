import { call, put, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { AppActions } from 'store/store';
import { ResponseGenerator } from 'store/types';

export function* getMyPost(action: any) {
  try {
    const result: ResponseGenerator = yield call(async () => {
      await api().get(`/posts/${action.payload.page}/${action.payload.list}`);
    });
    if (result.data) {
      yield put(AppActions.posts.getMyPostSuccess({ posts: result.data }));
      //yield put(AppActions.errors.clearErrors);
    }
  } catch (e: any) {
    console.log(e);
    if (e.response)
      yield put(AppActions.errors.getErrors(e.response.data.message));
  }
}

export function* createNewPost(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () => await api().post('/posts', action.payload)
    );
    console.log(result);
    if (result.data) {
      yield put(AppActions.posts.createPostSuccess({ posts: result.data }));
      yield put(AppActions.errors.clearErrors());
    }
    action.payload.callback();
  } catch (e: any) {
    if (e.response)
      yield put(AppActions.errors.getErrors(e.response.data.message));
  }
}
function* postsSaga() {
  yield takeLatest(AppActions.posts.getMyPostRequest, getMyPost);
  yield takeLatest(AppActions.posts.createPostRequest, createNewPost);
}

export default postsSaga;
