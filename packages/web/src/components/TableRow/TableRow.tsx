import * as React from "react";

import Modal from "@material-ui/core/Modal";
import Close from "@material-ui/icons/Close";
import Done from "@material-ui/icons/Done";

import css from "components/TableRow/TableRow.module.scss";
import {
  TableRowProps,
  TableRowState
} from "components/TableRow/TableRow.type";

class TableRow extends React.Component<TableRowProps, TableRowState> {
  state = {
    modalOpen: false
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  handleYesClick = () => {
    const { currentUserName } = this.props;

    this.props.onClick(currentUserName);
    this.closeModal();
  };

  render() {
    const { decision, image, name, quantity, currentUserName } = this.props;
    const { modalOpen } = this.state;

    const quantityVisible = +quantity !== 0 && decision;

    if (currentUserName === name) {
      return (
        <>
          <div
            className={`${css.tableRow} ${css.active}`}
            onClick={this.openModal}
          >
            <img src={image} alt="profile" />
            <p>{name}</p>
            {decision ? <Done /> : <Close />}
            <p>{quantityVisible ? quantity : ""}</p>
          </div>
          <Modal
            className={css.modal}
            open={modalOpen}
            onClose={this.closeModal}
          >
            <div className={css.textContainer}>
              <h4>I, {name}, changed my mind and want to delete my answer</h4>
              <div className={css.buttonGroup}>
                <button onClick={this.handleYesClick}>Yes</button>
                <button onClick={this.closeModal}>No</button>
              </div>
            </div>
          </Modal>
        </>
      );
    }

    return (
      <div className={css.tableRow}>
        <img src={image} alt="profile" />
        <p>{name}</p>
        {decision ? <Done /> : <Close />}
        <p>{quantityVisible ? quantity : ""}</p>
      </div>
    );
  }
}

export default TableRow;
