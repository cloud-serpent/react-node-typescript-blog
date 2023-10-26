import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { ResponseGenerator } from 'store/types';

import { request } from '../../../utils';
import { AppActionTypes, AppActions } from '../../store';

export function* signInRequestSaga(
  action: PayloadAction<AppActionTypes.Auth.GetSignInRequestAction>
) {
  try {
    yield put(AppActions.loading.setLoading());

    const result: ResponseGenerator = yield call(request, {
      // url: `${process.env.REACT_APP_BACKEND_API_ENDPOINT}/auth/login`,
      url: `http://localhost:8000/api/v1/auth/login`,
      method: 'POST',
      data: action.payload.userInfo,
      isTokenIncluded: false,
    });
    yield put(AppActions.loading.finishLoading());
    yield put(AppActions.auth.setToken(<any>result.data));

    if (action.payload.next) {
      action.payload.next();
    }
  } catch (error: unknown) {
    console.log(error);
    yield put(AppActions.loading.finishLoading());
    if (error instanceof AxiosError) {
      console.log(error.response);
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
