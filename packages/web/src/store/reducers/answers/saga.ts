import { all, call, put, select, takeEvery } from "redux-saga/effects";

import { addAnswer, updateAnswer } from "store/reducers/answers/actions";
import { getAnswersSelector } from "store/reducers/answers/selectors";
import { Answers, AnswersActionTypes } from "store/reducers/answers/types";

export default function* answersSaga() {
  yield all([call(watchAddAnswerSaga)]);
}

function* addAnswerSaga(action: ReturnType<typeof addAnswer>) {
  const { payload } = action;

  let newAnswers: Answers;
  const answers: Answers = yield select(getAnswersSelector);
  const answerIndex = answers.findIndex(
    answer => answer.displayName === payload.displayName
  );

  if (answerIndex > -1) {
    newAnswers = answers.map((answer, index) =>
      index === answerIndex ? payload : answer
    );

    localStorage.setItem("answers", JSON.stringify(newAnswers));

    yield put(updateAnswer(newAnswers));
    return;
  }

  newAnswers = [...answers, payload];

  localStorage.setItem("answers", JSON.stringify(newAnswers));

  yield put(updateAnswer(newAnswers));
}

function* watchAddAnswerSaga() {
  yield takeEvery(AnswersActionTypes.ADD_ANSWER, addAnswerSaga);
}
