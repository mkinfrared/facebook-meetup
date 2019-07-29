import reducer, { initialState } from "store/reducers/answers/reducer";
import { Answers, AnswersActionTypes } from "store/reducers/answers/types";

describe("Answers reducer", () => {
  const payload: Answers = [
    { displayName: "marklar", friendsQuantity: "42", decision: true }
  ];

  it("should return an initial state when state is undefined", () => {
    const state = undefined;
    const action = { type: "marklar" };
    const result = reducer(state, action);

    expect(result).toMatchObject(initialState);
  });

  it("should return a correct state", () => {
    const state = undefined;
    const action = { type: AnswersActionTypes.UPDATE_ANSWER, payload };
    const result = reducer(state, action);

    expect(result).toMatchObject(payload);
  });

  it("should return a correct state", () => {
    const state = undefined;
    const action = { type: AnswersActionTypes.GET_ANSWERS_SUCCESS, payload };
    const result = reducer(state, action);

    expect(result).toMatchObject(payload);
  });
});
