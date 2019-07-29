import * as React from "react";
import { shallow } from "enzyme";

import { Table } from "./Table";

describe("Table", () => {
  it("should be defined", () => {

    const wrapper = shallow(<Table answers={} user={} deleteAnswer={} />);
  });
});
