import Modal from "@material-ui/core/Modal";
import Close from "@material-ui/icons/Close";
import Done from "@material-ui/icons/Done";
import { shallow } from "enzyme";
import * as React from "react";

import { TableRow } from "./TableRow";

describe("TableRow", () => {
  let image = "image";
  let name = "marklar";
  let decision = true;
  let quantity = "42";
  let currentUsername = "foo";
  let onClick = jest.fn();

  beforeEach(() => {
    image = "image";
    name = "marklar";
    decision = true;
    quantity = "42";
    currentUsername = "foo";
    onClick = jest.fn();
  });

  it("should be defined", () => {
    const wrapper = shallow(
      <TableRow
        image={image}
        name={name}
        decision={decision}
        quantity={quantity}
        currentUserName={currentUsername}
        onClick={onClick}
      />
    ).instance();

    expect(wrapper).toBeDefined();
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(
      <TableRow
        image={image}
        name={name}
        decision={decision}
        quantity={quantity}
        currentUserName={currentUsername}
        onClick={onClick}
      />
    ).instance();

    expect(wrapper).toMatchSnapshot();
  });

  it("should set modalOpen to true on state", () => {
    const wrapper = shallow(
      <TableRow
        image={image}
        name={name}
        decision={decision}
        quantity={quantity}
        currentUserName={currentUsername}
        onClick={onClick}
      />
    );

    const instance = wrapper.instance() as TableRow;

    expect(instance.state.modalOpen).toBe(false);

    instance.openModal();

    expect(instance.state.modalOpen).toBe(true);
  });

  it("should set modalOpen to false on state", () => {
    const wrapper = shallow(
      <TableRow
        image={image}
        name={name}
        decision={decision}
        quantity={quantity}
        currentUserName={currentUsername}
        onClick={onClick}
      />
    );

    const instance = wrapper.instance() as TableRow;
    instance.setState({ modalOpen: true });

    expect(instance.state.modalOpen).toBe(true);

    instance.closeModal();

    expect(instance.state.modalOpen).toBe(false);
  });

  it("should call onClick from props and closeModal", () => {
    const wrapper = shallow(
      <TableRow
        image={image}
        name={name}
        decision={decision}
        quantity={quantity}
        currentUserName={currentUsername}
        onClick={onClick}
      />
    );

    const instance = wrapper.instance() as TableRow;
    instance.closeModal = jest.fn();
    instance.handleYesClick();

    expect(onClick).toBeCalledTimes(1);
    expect(onClick).toBeCalledWith(currentUsername);
    expect(instance.closeModal).toBeCalledTimes(1);
  });

  it("should render '<Done />' when decision is true", () => {
    const decision = true;
    const wrapper = shallow(
      <TableRow
        image={image}
        name={name}
        decision={decision}
        quantity={quantity}
        currentUserName={currentUsername}
        onClick={onClick}
      />
    );

    const done = wrapper.find(Done);
    const close = wrapper.find(Close);

    expect(done).toHaveLength(1);
    expect(close).toHaveLength(0);
  });

  it("should render '<Close />' when decision is false", () => {
    const decision = false;
    const wrapper = shallow(
      <TableRow
        image={image}
        name={name}
        decision={decision}
        quantity={quantity}
        currentUserName={currentUsername}
        onClick={onClick}
      />
    );

    const done = wrapper.find(Done);
    const close = wrapper.find(Close);

    expect(done).toHaveLength(0);
    expect(close).toHaveLength(1);
  });

  it("should render '<Modal />' when currentUsername equals name", () => {
    const currentUsername = "marklar";
    const name = "marklar";
    const wrapper = shallow(
      <TableRow
        image={image}
        name={name}
        decision={decision}
        quantity={quantity}
        currentUserName={currentUsername}
        onClick={onClick}
      />
    );

    const modal = wrapper.find(Modal);

    expect(modal).toHaveLength(1);
  });
});
