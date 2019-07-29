import { mount, shallow } from "enzyme";
import * as React from "react";
import { Answers } from "store/reducers/answers/types";

import { Table } from "./Table";

describe("Table", () => {
  let user = {};
  let answers: Answers = [];
  let deleteAnswer = jest.fn();

  beforeEach(() => {
    user = {};
    answers = [];
    deleteAnswer = jest.fn();
  });

  it("should be defined", () => {
    const wrapper = shallow(
      <Table answers={answers} user={user} deleteAnswer={deleteAnswer} />
    ).instance();

    expect(wrapper).toBeDefined();
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(
      <Table answers={answers} user={user} deleteAnswer={deleteAnswer} />
    ).instance();

    expect(wrapper).toMatchSnapshot();
  });

  it("should change the inputValue on state to 'marklar'", () => {
    const wrapper = mount(
      <Table answers={answers} user={user} deleteAnswer={deleteAnswer} />
    );

    const instance = wrapper.instance() as Table;

    expect(instance.state.inputValue).toBe("");

    const input = wrapper.find("input");
    const event = { target: { value: "marklar" } };

    input.simulate("change", event);

    expect(instance.state.inputValue).toBe("marklar");
  });

  it("should render 5 '<TableRow/>' elements", () => {
    const answers: Answers = [
      {
        displayName: "marklar",
        friendsQuantity: "42",
        decision: true,
        photos: [{ value: "url" }]
      },
      {
        displayName: "foo",
        friendsQuantity: "7",
        decision: true,
        photos: [{ value: "url" }]
      },
      {
        displayName: "bar",
        friendsQuantity: "13",
        decision: true,
        photos: [{ value: "url" }]
      },
      {
        displayName: "foobar",
        friendsQuantity: "17",
        decision: true,
        photos: [{ value: "url" }]
      },
      {
        displayName: "barfoo",
        friendsQuantity: "23",
        decision: true,
        photos: [{ value: "url" }]
      }
    ];

    const wrapper = shallow(
      <Table answers={answers} user={user} deleteAnswer={deleteAnswer} />
    );

    const tableRows = wrapper.find("TableRow");

    expect(tableRows).toHaveLength(5);
  });

  it("should render 2 '<TableRow/>' elements", () => {
    const answers: Answers = [
      {
        displayName: "marklar",
        friendsQuantity: "42",
        decision: true,
        photos: [{ value: "url" }]
      },
      {
        displayName: "foo",
        friendsQuantity: "7",
        decision: true,
        photos: [{ value: "url" }]
      },
      {
        displayName: "bar",
        friendsQuantity: "13",
        decision: true,
        photos: [{ value: "url" }]
      },
      {
        displayName: "foobar",
        friendsQuantity: "17",
        decision: true,
        photos: [{ value: "url" }]
      },
      {
        displayName: "barfoo",
        friendsQuantity: "23",
        decision: true,
        photos: [{ value: "url" }]
      }
    ];

    const wrapper = shallow(
      <Table answers={answers} user={user} deleteAnswer={deleteAnswer} />
    );
    const instance = wrapper.instance() as Table;

    instance.setState({ inputValue: "b" });

    expect(instance.state.inputValue).toBe("b");

    const tableRows = wrapper.find("TableRow");

    expect(tableRows).toHaveLength(2);
  });
});
