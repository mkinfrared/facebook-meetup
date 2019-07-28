import { createSelector } from "reselect";

import { AppState } from "store/store.type";

const getAnswers = (state: AppState) => state.answers;

export const getAnswersSelector = createSelector(
  getAnswers,
  answers => answers
);
