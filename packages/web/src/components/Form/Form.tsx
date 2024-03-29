import * as React from "react";

import Modal from "@material-ui/core/Modal";

import ButtonBase from "components/ButtonBase";
import { FormProps, FormState } from "components/Form/Form.type";

import css from "components/Form/Form.module.scss";
import { Answer } from "store/reducers/answers/types";

export class Form extends React.Component<FormProps, FormState> {
  state = {
    displayName: this.props.user.displayName || "",
    friendsQuantity: "1",
    decision: null,
    modalOpen: false
  };

  componentDidMount() {
    const { answers } = this.props;

    const answer = answers.find(
      elem => elem.displayName === this.state.displayName
    );

    if (answer) {
      this.setState({
        friendsQuantity: answer.friendsQuantity,
        decision: answer.decision
      });
    }
  }

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    this.setState({ displayName: value });
  };

  handleFriendsQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (+value < 0) {
      return;
    }

    this.setState({ friendsQuantity: value });
  };

  handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    let newValue: boolean = true;

    if (value === "true") {
      newValue = true;
    }

    if (value === "false") {
      newValue = false;
    }

    this.setState({ decision: newValue });
  };

  handleClick = () => {
    const { decision, friendsQuantity, displayName } = this.state;

    if (decision === null) {
      this.openModal();
      return;
    }

    const answer: Answer = {
      displayName,
      friendsQuantity,
      decision,
      photos: this.props.user.photos
    };

    this.props.addAnswer(answer);
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { friendsQuantity, displayName, modalOpen, decision } = this.state;

    return (
      <div className={css.form}>
        <div className={css.container}>
          <h4>Me</h4>
          <input
            type="text"
            placeholder="Your name"
            name="displayName"
            onChange={this.handleNameChange}
            value={displayName}
          />
          <h4>With me</h4>
          <input
            type="number"
            name="friendsQuantity"
            value={friendsQuantity}
            onChange={this.handleFriendsQuantityChange}
          />
          <select
            name="decision"
            value={`${decision}`}
            onChange={this.handleSelectChange}
          >
            <option value="null" disabled>
              Need to Decide
            </option>
            <option value="true">I will go</option>
            <option value="false">I will not go</option>
          </select>
        </div>
        <ButtonBase buttonText="Send" onClick={this.handleClick} />
        <Modal className={css.modal} open={modalOpen} onClose={this.closeModal}>
          <div className={css.textContainer}>
            <h4>Please fill out the form when you make your decision</h4>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Form;
