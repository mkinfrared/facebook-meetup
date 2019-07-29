import { Reducer } from "redux";
import { User, UserActionTypes } from "store/reducers/user/types";

export const initialState = {};

const reducer: Reducer<User> = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserActionTypes.FETCH_USER_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default reducer;
