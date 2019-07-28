import { User } from "store/reducers/user/types";

export type Answers = Answer[];

export interface Answer extends Partial<User> {
  decision: string;
  friendsQuantity: string;
}

export enum AnswersActionTypes {
  ADD_ANSWER = "@@answers/ADD_ANSWER",
  UPDATE_ANSWER = "@@answers/UPDATE_ANSWER",
  DELETE_ANSWER = "@@answers/DELETE_ANSWER",
  GET_ANSWERS = "@@answers/GET_ANSWERS",
  GET_ANSWERS_SUCCESS = "@@answers/GET_ANSWERS_SUCCESS",
  GET_ANSWERS_FAIL = "@@answers/GET_ANSWERS_FAIL"
}
