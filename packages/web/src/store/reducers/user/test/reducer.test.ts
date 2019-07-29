import reducer, { initialState } from "store/reducers/user/reducer";
import { User, UserActionTypes } from "store/reducers/user/types";

describe("User reducer", () => {
  it("should return an initial state when state is undefined", () => {
    const state = undefined;
    const action = { type: "marklar" };
    const result = reducer(state, action);

    expect(result).toMatchObject(initialState);
  });

  it("should return a correct state", () => {
    const state = undefined;
    const payload: User = { displayName: "marklar" };
    const action = { type: UserActionTypes.FETCH_USER_SUCCESS, payload };
    const result = reducer(state, action);

    expect(result).toMatchObject(payload);
  });
});
