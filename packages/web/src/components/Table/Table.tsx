import * as React from "react";

import { TableProps, TableState } from "components/Table/Table.type";
import TableRow from "components/TableRow";

import css from "components/Table/Table.module.scss";

export class Table extends React.Component<TableProps, TableState> {
  state: TableState = {
    inputValue: ""
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    this.setState({ inputValue: value });
  };

  render() {
    const { inputValue } = this.state;
    const rows = this.props.answers
      .filter(answer =>
        answer.displayName!.toLowerCase().startsWith(inputValue.toLowerCase())
      )
      .map(answer => (
        <TableRow
          key={answer.displayName}
          decision={answer.decision!}
          image={answer.photos![0].value}
          name={answer.displayName!}
          quantity={answer.friendsQuantity}
          currentUserName={this.props.user.displayName!}
          onClick={this.props.deleteAnswer}
        />
      ));

    return (
      <div className={css.table}>
        <input type="text" onChange={this.handleChange} />
        {rows}
      </div>
    );
  }
}

export default Table;
