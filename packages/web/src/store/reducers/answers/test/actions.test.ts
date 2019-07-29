import {
  addAnswer,
  deleteAnswer,
  getAnswers,
  getAnswersFail,
  getAnswersSuccess,
  updateAnswer
} from "store/reducers/answers/actions";
import { Answer, AnswersActionTypes } from "store/reducers/answers/types";

describe("Answers actions", () => {
  let answer: Answer;

  beforeEach(() => {
    answer = { displayName: "marklar", decision: true, friendsQuantity: "42" };
  });

  it("should return a correct action type", () => {
    const result = addAnswer(answer);
    expect(result).toMatchObject({
      type: AnswersActionTypes.ADD_ANSWER,
      payload: answer
    });
  });

  it("should return a correct action type", () => {
    const answers = [answer];
    const result = updateAnswer(answers);
    expect(result).toMatchObject({
      type: AnswersActionTypes.UPDATE_ANSWER,
      payload: answers
    });
  });

  it("should return a correct action type", () => {
    const name = "marklar";
    const result = deleteAnswer(name);
    expect(result).toMatchObject({
      type: AnswersActionTypes.DELETE_ANSWER,
      payload: name
    });
  });

  it("should return a correct action type", () => {
    const result = getAnswers();
    expect(result).toMatchObject({
      type: AnswersActionTypes.GET_ANSWERS
    });
  });

  it("should return a correct action type", () => {
    const answers = [answer];
    const result = getAnswersSuccess(answers);
    expect(result).toMatchObject({
      type: AnswersActionTypes.GET_ANSWERS_SUCCESS,
      payload: answers
    });
  });

  it("should return a correct action type", () => {
    const result = getAnswersFail();
    expect(result).toMatchObject({
      type: AnswersActionTypes.GET_ANSWERS_FAIL
    });
  });
});
