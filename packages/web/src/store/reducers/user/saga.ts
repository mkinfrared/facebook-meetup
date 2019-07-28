import { AxiosResponse } from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { fetchUserFail, fetchUserSuccess } from "store/reducers/user/actions";
import { User, UserActionTypes } from "store/reducers/user/types";

import api from "utils/api";

export default function* userSaga() {
  yield all([call(watchFetchUserSaga)]);
}

function* fetchUserSaga() {
  try {
    const response: AxiosResponse = yield api.get("/auth/user");
    const user: User = response.data;

    yield put(fetchUserSuccess(user));
  } catch (e) {
    yield put(fetchUserFail());
  }
}

function* watchFetchUserSaga() {
  yield takeEvery(UserActionTypes.FETCH_USER, fetchUserSaga);
}
