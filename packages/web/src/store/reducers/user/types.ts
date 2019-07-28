export interface User {
  id?: string;
  displayName?: string;
  gender?: string;
  ageRange?: {
    min: number;
    max?: number;
  };
  profileUrl?: string;
  username?: string;
  birthday?: string;

  _raw?: string;
  _json?: any;
}

export enum UserActionTypes {
  FETCH_USER = "@@user/FETCH_USER",
  FETCH_USER_SUCCESS = "@@user/FETCH_USER_SUCCESS",
  FETCH_USER_FAIL = "@@user/FETCH_USER_FAIL"
}
