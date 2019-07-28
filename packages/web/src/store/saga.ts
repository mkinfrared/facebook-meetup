import { all, call } from "redux-saga/effects";

import answersSaga from "store/reducers/answers/saga";
import userSaga from "store/reducers/user/saga";

export default function* rootSaga() {
  yield all([call(userSaga), call(answersSaga)]);
}
