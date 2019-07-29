import * as React from "react";
import { mount, shallow } from "enzyme";

import { Form } from "./Form";
import { Answers } from "store/reducers/answers/types";

describe("Form", () => {
  it("should be defined", () => {
    const user = {};
    const answers: Answers = [];
    const addAnswers = jest.fn();

    const wrapper = shallow(
      <Form user={user} answers={answers} addAnswer={addAnswers} />
    ).instance();

    expect(wrapper).toBeDefined();
  });

  it("should match the snapshot", () => {
    const user = {};
    const answers: Answers = [];
    const addAnswers = jest.fn();

    const wrapper = shallow(
      <Form user={user} answers={answers} addAnswer={addAnswers} />
    ).instance();

    expect(wrapper).toMatchSnapshot();
  });

  it("should change the state of the component to a mocked answer object", () => {
    const user = { displayName: "marklar" };
    const answers: Answers = [
      {
        displayName: "marklar",
        decision: true,
        friendsQuantity: "42",
        id: "4",
        photos: [{ value: "url" }]
      }
    ];
    const addAnswers = jest.fn();

    const wrapper = shallow(
      <Form user={user} answers={answers} addAnswer={addAnswers} />
    ).instance() as Form;

    expect(wrapper.state.decision).toBe(answers[0].decision);
    expect(wrapper.state.friendsQuantity).toBe(answers[0].friendsQuantity);
  });

  it("should change the displayName on state to 'marklar'", () => {
    const user = { displayName: "" };
    const answers: Answers = [];
    const addAnswers = jest.fn();

    const wrapper = mount(
      <Form user={user} answers={answers} addAnswer={addAnswers} />
    );
    const instance = wrapper.instance() as Form;

    expect(instance.state.displayName).toBe(user.displayName);

    const input = wrapper.find("input[name='displayName']");
    const event = { target: { name: "displayName", value: "marklar" } };

    input.simulate("change", event);

    expect(instance.state.displayName).toBe("marklar");
  });

  it("should change the friendsQuantity '42'", () => {
    const user = { displayName: "" };
    const answers: Answers = [];
    const addAnswers = jest.fn();

    const wrapper = mount(
      <Form user={user} answers={answers} addAnswer={addAnswers} />
    );
    const instance = wrapper.instance() as Form;

    expect(instance.state.friendsQuantity).toBe("1");

    const input = wrapper.find("input[name='friendsQuantity']");
    const event = { target: { name: "friendsQuantity", value: "42" } };

    input.simulate("change", event);

    expect(instance.state.friendsQuantity).toBe("42");
  });

  it("should not change the friendsQuantity on state", () => {
    const user = { displayName: "" };
    const answers: Answers = [];
    const addAnswers = jest.fn();

    const wrapper = mount(
      <Form user={user} answers={answers} addAnswer={addAnswers} />
    );
    const instance = wrapper.instance() as Form;

    expect(instance.state.friendsQuantity).toBe("1");

    instance.setState({ friendsQuantity: "42" });

    expect(instance.state.friendsQuantity).toBe("42");

    const input = wrapper.find("input[name='friendsQuantity']");
    const event = { target: { name: "friendsQuantity", value: "-1" } };

    input.simulate("change", event);

    expect(instance.state.friendsQuantity).toBe("42");
  });

  it("should change the decision on state to true", () => {
    const user = { displayName: "" };
    const answers: Answers = [];
    const addAnswers = jest.fn();

    const wrapper = mount(
      <Form user={user} answers={answers} addAnswer={addAnswers} />
    );
    const instance = wrapper.instance() as Form;

    expect(instance.state.decision).toBe(null);

    const select = wrapper.find("select");
    const event = { target: { value: "true" } };

    select.simulate("change", event);

    expect(instance.state.decision).toBe(true);
  });

  it("should change the decision on state to false", () => {
    const user = { displayName: "" };
    const answers: Answers = [];
    const addAnswers = jest.fn();

    const wrapper = mount(
      <Form user={user} answers={answers} addAnswer={addAnswers} />
    );
    const instance = wrapper.instance() as Form;

    expect(instance.state.decision).toBe(null);

    const select = wrapper.find("select");
    const event = { target: { value: "false" } };

    select.simulate("change", event);

    expect(instance.state.decision).toBe(false);
  });

  it("should change the modalOpen on state to true when decision is null", () => {
    const user = { displayName: "" };
    const answers: Answers = [];
    const addAnswers = jest.fn();

    const wrapper = mount(
      <Form user={user} answers={answers} addAnswer={addAnswers} />
    );
    const instance = wrapper.instance() as Form;

    expect(instance.state.modalOpen).toBe(false);
    expect(instance.state.decision).toBe(null);

    instance.handleClick();

    expect(instance.state.modalOpen).toBe(true);
  });

  it("should call addAnswers function from the props when decision is not null", () => {
    const user = { displayName: "" };
    const answers: Answers = [];
    const addAnswers = jest.fn();

    const wrapper = mount(
      <Form user={user} answers={answers} addAnswer={addAnswers} />
    );
    const instance = wrapper.instance() as Form;

    expect(instance.state.modalOpen).toBe(false);
    expect(instance.state.decision).toBe(null);

    instance.setState({ decision: true });

    expect(instance.state.decision).toBe(true);

    instance.handleClick();

    expect(addAnswers).toBeCalled();
    expect(addAnswers).toBeCalledTimes(1);
  });

  it("should set modalOpen on state to false", () => {
    const user = { displayName: "" };
    const answers: Answers = [];
    const addAnswers = jest.fn();

    const wrapper = mount(
      <Form user={user} answers={answers} addAnswer={addAnswers} />
    );
    const instance = wrapper.instance() as Form;

    expect(instance.state.modalOpen).toBe(false);
    expect(instance.state.decision).toBe(null);

    instance.handleClick();

    expect(instance.state.modalOpen).toBe(true);

    instance.closeModal();

    expect(instance.state.modalOpen).toBe(false);
  });
});
