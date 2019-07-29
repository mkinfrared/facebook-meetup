import SagaTester from "redux-saga-tester";

import {
  addAnswer,
  deleteAnswer,
  getAnswers
} from "store/reducers/answers/actions";
import reducer, {
  initialState as answersInitialState
} from "store/reducers/answers/reducer";
import answersSaga from "store/reducers/answers/saga";
import { Answer, AnswersActionTypes } from "store/reducers/answers/types";
import { AppState } from "store/store.type";

describe("Answers saga", () => {
  const sagaTester = new SagaTester<Partial<AppState>>({
    initialState: { answers: answersInitialState },
    reducers: { answers: reducer }
  });

  const answer: Answer = {
    displayName: "marklar",
    friendsQuantity: "42",
    decision: true
  };

  sagaTester.start(answersSaga);

  beforeEach(() => {
    sagaTester.reset(true);

    localStorage.clear();
  });

  it("should match the initialState", async () => {
    const result = sagaTester.getState();

    expect(result).toEqual({ answers: answersInitialState });
  });

  it("should call ADD_ANSWER and UPDATE_ANSWER and match the updated state", async () => {
    expect(sagaTester.getState()).toEqual({ answers: answersInitialState });

    const result = [answer];

    sagaTester.dispatch(addAnswer(answer));

    sagaTester.waitFor(AnswersActionTypes.UPDATE_ANSWER);
    const json = localStorage.getItem("answers");
    const local = JSON.parse(json!);

    expect(local).toMatchObject(result);
    expect(sagaTester.getState()).toMatchObject({ answers: result });
    expect(sagaTester.numCalled(AnswersActionTypes.ADD_ANSWER)).toBe(1);
    expect(sagaTester.numCalled(AnswersActionTypes.UPDATE_ANSWER)).toBe(1);
  });

  it("should call ADD_ANSWER and UPDATE_ANSWER and match the updated state", async () => {
    expect(sagaTester.getState()).toEqual({ answers: answersInitialState });

    const result = [answer];

    sagaTester.dispatch(addAnswer(answer));

    sagaTester.waitFor(AnswersActionTypes.UPDATE_ANSWER);

    expect(sagaTester.getState()).toMatchObject({ answers: result });
    expect(sagaTester.numCalled(AnswersActionTypes.ADD_ANSWER)).toBe(1);
    expect(sagaTester.numCalled(AnswersActionTypes.UPDATE_ANSWER)).toBe(1);
  });

  it("should call GET_ANSWERS and GET_ANSWERS_SUCCESS and match the updated state", async () => {
    expect(sagaTester.getState()).toEqual({ answers: answersInitialState });

    const result = [answer];

    localStorage.setItem("answers", JSON.stringify(result));

    sagaTester.dispatch(getAnswers());

    sagaTester.waitFor(AnswersActionTypes.GET_ANSWERS_SUCCESS);

    expect(sagaTester.getState()).toMatchObject({ answers: result });
    expect(sagaTester.numCalled(AnswersActionTypes.GET_ANSWERS)).toBe(1);
    expect(sagaTester.numCalled(AnswersActionTypes.GET_ANSWERS_SUCCESS)).toBe(
      1
    );
  });

  it("should call DELETE_ANSWERS and UPDATE_ANSWERS and match the updated state", async () => {
    expect(sagaTester.getState()).toEqual({ answers: answersInitialState });

    sagaTester.dispatch(addAnswer(answer));

    expect(sagaTester.getState()).toMatchObject({ answers: [answer] });

    sagaTester.dispatch(deleteAnswer(answer.displayName!));

    sagaTester.waitFor(AnswersActionTypes.UPDATE_ANSWER);

    expect(sagaTester.getState()).toMatchObject({
      answers: answersInitialState
    });
    expect(sagaTester.numCalled(AnswersActionTypes.ADD_ANSWER)).toBe(1);
    expect(sagaTester.numCalled(AnswersActionTypes.DELETE_ANSWER)).toBe(1);
    expect(sagaTester.numCalled(AnswersActionTypes.UPDATE_ANSWER)).toBe(2);
  });
});
