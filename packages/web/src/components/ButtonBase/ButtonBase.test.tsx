import * as React from "react";
import { shallow } from "enzyme";

import { ButtonBase } from "./ButtonBase";

describe("ButtonBase", () => {
  it("should be defined", () => {
    const onClick = jest.fn();
    const text = "marklar";

    const wrapper = shallow(
      <ButtonBase buttonText={text} onClick={onClick} />
    ).instance();

    expect(wrapper).toBeDefined();
  });

  it("should match the snapshot", () => {
    const onClick = jest.fn();
    const text = "marklar";

    const wrapper = shallow(
      <ButtonBase buttonText={text} onClick={onClick} />
    ).instance();

    expect(wrapper).toMatchSnapshot();
  });

});
