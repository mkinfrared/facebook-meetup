import * as React from "react";
import { shallow } from "enzyme";

import { Auth } from "./Auth";

describe("Auth", () => {
  it("should be defined", () => {
    const wrapper = shallow(<Auth />).instance();

    expect(wrapper).toBeDefined();
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<Auth />).instance();

    expect(wrapper).toMatchSnapshot();
  });
});
