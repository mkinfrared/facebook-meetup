import { shallow } from "enzyme";
import * as React from "react";

import { ButtonBase } from "./ButtonBase";

describe("ButtonBase", () => {
  let onClick = jest.fn();
  let text = "marklar";

  beforeEach(() => {
    onClick = jest.fn();
    text = "marklar";
  });

  it("should be defined", () => {
    const wrapper = shallow(
      <ButtonBase buttonText={text} onClick={onClick} />
    ).instance();

    expect(wrapper).toBeDefined();
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(
      <ButtonBase buttonText={text} onClick={onClick} />
    ).instance();

    expect(wrapper).toMatchSnapshot();
  });
});
