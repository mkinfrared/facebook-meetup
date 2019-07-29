import SagaTester from "redux-saga-tester";

import { fetchUser } from "store/reducers/user/actions";
import reducer, {
  initialState as userInitialState
} from "store/reducers/user/reducer";
import userSaga from "store/reducers/user/saga";
import { UserActionTypes } from "store/reducers/user/types";
import { AppState } from "store/store.type";

describe("User saga", () => {
  const sagaTester = new SagaTester<Partial<AppState>>({
    initialState: { user: userInitialState },
    reducers: { user: reducer }
  });
  sagaTester.start(userSaga);

  beforeEach(() => {
    sagaTester.reset(true);

    localStorage.clear();
  });

  it("should match the initialState", async () => {
    const result = sagaTester.getState();

    expect(result).toEqual({ user: userInitialState });
  });

  it("should call FETCH_USER and have the correct state", async () => {
    const result = sagaTester.getState();

    expect(result).toEqual({ user: userInitialState });

    sagaTester.dispatch(fetchUser());

    sagaTester.waitFor(UserActionTypes.FETCH_USER_SUCCESS);

    expect(sagaTester.numCalled(UserActionTypes.FETCH_USER)).toBe(1);
  });
});
