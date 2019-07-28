import { action } from "typesafe-actions";

import {
  Answer,
  Answers,
  AnswersActionTypes
} from "store/reducers/answers/types";

export const addAnswer = (answer: Answer) =>
  action(AnswersActionTypes.ADD_ANSWER, answer);

export const updateAnswer = (answers: Answers) =>
  action(AnswersActionTypes.UPDATE_ANSWER, answers);

export const deleteAnswer = (answer: Answer) =>
  action(AnswersActionTypes.DELETE_ANSWER, answer);
