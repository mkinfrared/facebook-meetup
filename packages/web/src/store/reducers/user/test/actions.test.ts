import {
  fetchUser,
  fetchUserFail,
  fetchUserSuccess
} from "store/reducers/user/actions";
import { User, UserActionTypes } from "store/reducers/user/types";

describe("User actions", () => {
  it("should return a correct action type", () => {
    const result = fetchUser();
    expect(result).toMatchObject({
      type: UserActionTypes.FETCH_USER
    });
  });

  it("should return a correct action type", () => {
    const user: User = { id: "42", displayName: "marklar" };

    const result = fetchUserSuccess(user);
    expect(result).toMatchObject({
      type: UserActionTypes.FETCH_USER_SUCCESS,
      payload: user
    });
  });

  it("should return a correct action type", () => {
    const result = fetchUserFail();
    expect(result).toMatchObject({
      type: UserActionTypes.FETCH_USER_FAIL
    });
  });
});
