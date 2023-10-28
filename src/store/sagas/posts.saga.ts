import { call, put, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import { AppActions } from 'store/store';
import { ResponseGenerator } from 'store/types';

export function* getMyPost(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () =>
        await api().get(
          `/posts/post/user?page=${action.payload.page}&listNum=${action.payload.list}`
        )
    );
    if (result.data) {
      yield put(AppActions.posts.getMyPostSuccess(result.data));
      yield put(AppActions.errors.clearErrors());
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
      async () => await api().post('/posts/post', action.payload)
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

export function* updatePost(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () => await api().put('/posts/post', action.payload)
    );
    if (result.data) {
      action.payload.callback();
    }
  } catch (e: any) {
    if (e.response)
      yield put(AppActions.errors.getErrors(e.response.data.message));
  }
}

export function* deletePost(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () => await api().delete(`/posts/post/${action.payload.id}`)
    );
    if (result.data) {
      action.payload.callback();
    }
  } catch (e: any) {
    if (e.response)
      yield put(AppActions.errors.getErrors(e.response.data.message));
  }
}

function* postsSaga() {
  yield takeLatest(AppActions.posts.getMyPostRequest, getMyPost);
  yield takeLatest(AppActions.posts.createPostRequest, createNewPost);
  yield takeLatest(AppActions.posts.updatePostRequest, updatePost);
  yield takeLatest(AppActions.posts.deletePostRequest, deletePost);
}

export default postsSaga;
