export interface User {
  id?: string;
  displayName?: string;
  photos?: [
    {
      value: string;
    }
  ];
}

export enum UserActionTypes {
  FETCH_USER = "@@user/FETCH_USER",
  FETCH_USER_SUCCESS = "@@user/FETCH_USER_SUCCESS",
  FETCH_USER_FAIL = "@@user/FETCH_USER_FAIL"
}
