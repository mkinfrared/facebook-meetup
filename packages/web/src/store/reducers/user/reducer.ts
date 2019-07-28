import { Reducer } from "redux";

const initialState = {};

const reducer: Reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default reducer;
