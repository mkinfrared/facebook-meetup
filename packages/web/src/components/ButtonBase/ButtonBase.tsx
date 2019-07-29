import { ButtonBaseProps } from "components/ButtonBase/ButtonBase.type";
import * as React from "react";

import css from "components/ButtonBase/ButtonBase.module.scss";

export const ButtonBase: React.FC<ButtonBaseProps> = ({
  buttonText,
  onClick
}) => {
  return (
    <div className={css.buttonBase}>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default ButtonBase;
