import { shallow, ShallowWrapper } from "enzyme";
import { createLocation, createMemoryHistory } from "history";
import * as React from "react";
import { match } from "react-router-dom";

import { User } from "store/reducers/user/types";
import { Routes } from "./Routes";

describe("Routes", () => {
  let wrapper: ShallowWrapper<Routes>;
  let user: User = { id: "42" };
  let history = createMemoryHistory();
  let path = `/route/:id`;
  let match: match<{ id: string }> = {
    isExact: false,
    path,
    url: path.replace(":id", "1"),
    params: { id: "1" }
  };

  let location = createLocation(match.url);

  beforeEach(() => {
    user = { id: "42" };
    history = createMemoryHistory();
    path = `/route/:id`;
    location = createLocation(match.url);
    match = {
      isExact: false,
      path,
      url: path.replace(":id", "1"),
      params: { id: "1" }
    };
    wrapper = shallow(
      <Routes user={user} history={history} location={location} match={match} />
    );
  });

  it("should be defined", () => {
    expect(wrapper.instance()).toBeDefined();
  });

  it("should match the snapshot", () => {
    expect(wrapper.instance()).toMatchSnapshot();
  });

  it("should render one <Route/> when user is empty", () => {
    const user = {};

    const wrapper = shallow(
      <Routes user={user} history={history} location={location} match={match} />
    );
    const routes = wrapper.find("Route");

    expect(routes).toHaveLength(1);
  });

  it("should render two <Route/> and <Navigation /> when user is not empty and has an id", () => {
    const user = { id: "42" };

    const wrapper = shallow(
      <Routes user={user} history={history} location={location} match={match} />
    );
    const routes = wrapper.find("Route");
    const navigation = wrapper.find("Navigation");

    expect(routes).toHaveLength(2);
    expect(navigation).toHaveLength(1);
  });
});
