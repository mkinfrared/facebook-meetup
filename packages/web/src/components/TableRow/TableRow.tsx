import * as React from "react";

import Close from "@material-ui/icons/Close";
import Done from "@material-ui/icons/Done";

import css from "components/TableRow/TableRow.module.scss";
import { TableRowProps } from "components/TableRow/TableRow.type";

const TableRow: React.FC<TableRowProps> = ({
  decision,
  image,
  name,
  quantity,
  currentUserName
}) => {
  const active = currentUserName === name;

  return (
    <div className={`${css.tableRow} ${active ? css.active : ""}`}>
      <img src={image} alt="photo" />
      <p>{name}</p>
      {decision ? <Done /> : <Close />}
      <p>{quantity}</p>
    </div>
  );
};

export default TableRow;
