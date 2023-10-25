import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from '../../../utils';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { AppActionTypes, AppActions } from '../../store';
import { ResponseGenerator } from 'store/types';

export function* signInRequestSaga(
  action: PayloadAction<AppActionTypes.Auth.GetSignInRequestAction>
) {
  try {
    yield put(AppActions.loading.setLoading());

    // const result: ResponseGenerator = yield call(async () => {
    //     return await request('auth/signIn', "POST", action.payload.userInfo, false);
    // });

    const result: ResponseGenerator = yield call(request, {
      url: `${process.env.REACT_APP_BACKEND_API_ENDPOINT}/auth/login`,
      method: 'POST',
      data: action.payload.userInfo,
      isTokenIncluded: false,
    });

    yield put(AppActions.loading.finishLoading());
    yield put(AppActions.auth.setToken((<any>result.data).token));

    if (action.payload.next) {
      action.payload.next();
    }
  } catch (error: unknown) {
    yield put(AppActions.loading.finishLoading());

    if (error instanceof AxiosError) {
      const reasonCode: string = error.response?.data.reason;
      if (action.payload.errorAction) {
        action.payload.errorAction(error.response?.data.message);
      }
      if (reasonCode && action.payload.errors) {
        const errorHandler: () => void = action.payload.errors[reasonCode];
        errorHandler();
      }
    }
  }
}

export default (function* () {
  yield takeLatest(AppActions.auth.signInRequest.type, signInRequestSaga);
})();
