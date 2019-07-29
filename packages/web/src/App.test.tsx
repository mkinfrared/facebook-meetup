import { shallow } from "enzyme";
import * as React from "react";

import { App } from "./App";

describe("App", () => {
  it("should be defined", () => {
    const fetchUser = jest.fn();
    const getAnswers = jest.fn();
    const wrapper = shallow(
      <App fetchUser={fetchUser} getAnswers={getAnswers} />
    ).instance();

    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    const fetchUser = jest.fn();
    const getAnswers = jest.fn();
    const wrapper = shallow(
      <App fetchUser={fetchUser} getAnswers={getAnswers} />
    ).instance();

    expect(wrapper).toMatchSnapshot();
  });
});
