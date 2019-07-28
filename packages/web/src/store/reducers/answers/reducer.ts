import { Reducer } from "redux";

import { Answers, AnswersActionTypes } from "store/reducers/answers/types";

const initialState: Answers = [];

const reducer: Reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AnswersActionTypes.UPDATE_ANSWER:
      return [...payload];
    default:
      return state;
  }
};

export default reducer;
