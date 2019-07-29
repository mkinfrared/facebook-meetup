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

export const deleteAnswer = (name: string) =>
  action(AnswersActionTypes.DELETE_ANSWER, name);

export const getAnswers = () => action(AnswersActionTypes.GET_ANSWERS);

export const getAnswersSuccess = (answers: Answers) =>
  action(AnswersActionTypes.GET_ANSWERS_SUCCESS, answers);

export const getAnswersFail = () => action(AnswersActionTypes.GET_ANSWERS_FAIL);
