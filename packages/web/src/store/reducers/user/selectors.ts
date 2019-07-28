import { createSelector } from "reselect";

import { AppState } from "store/store.type";

const getUser = (state: AppState) => state.user;

export const getUserSelector = createSelector(
  getUser,
  user => user
);
