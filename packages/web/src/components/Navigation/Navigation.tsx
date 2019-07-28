import * as React from "react";
import { NavLink } from "react-router-dom";

import css from "components/Navigation/Navigation.module.scss";

const Navigation: React.FC = () => (
  <div className={css.navigation}>
    <NavLink to="/" activeClassName={css.active} exact>
      My Answer
    </NavLink>
    <NavLink to="/table" activeClassName={css.active}>
      All Answers
    </NavLink>
  </div>
);

export default Navigation;
