import { all, call } from "redux-saga/effects";

import userSaga from "store/reducers/user/saga";

export default function* rootSaga() {
  yield all([call(userSaga)]);
}
