import { User, UserActionTypes } from "store/reducers/user/types";
import { action } from "typesafe-actions";

export const fetchUser = () => action(UserActionTypes.FETCH_USER);

export const fetchUserSuccess = (user: User) =>
  action(UserActionTypes.FETCH_USER_SUCCESS, user);

export const fetchUserFail = () => action(UserActionTypes.FETCH_USER_FAIL);
