import { createSelector } from "reselect";

import { AppState } from "store/reducers/index";
import { User } from "store/reducers/user/types";

const getUser = (state: AppState) => state.user;

export const getUserSelector = createSelector(
  getUser,
  (user: User) => user
);
