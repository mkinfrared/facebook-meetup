import { shallow } from "enzyme";
import * as React from "react";

import { Navigation } from "./Navigation";

describe("Navigation", () => {
  it("should be defined", () => {
    const wrapper = shallow(<Navigation />).instance();

    expect(wrapper).toBeDefined();
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<Navigation />).instance();

    expect(wrapper).toMatchSnapshot();
  });
});
