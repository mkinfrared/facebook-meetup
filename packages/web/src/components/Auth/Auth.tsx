import * as React from "react";

import css from "components/Auth/Auth.module.scss";
import facebook from "components/Auth/Facebook.svg";

const Auth: React.FC = () => {
  const url = process.env.REACT_APP_BASE_URL;

  return (
    <div className={css.auth}>
      <div className={css.logo}>
        <a href={url + "/auth/facebook"}>
          <img src={facebook} alt="facebook" />
        </a>
      </div>
    </div>
  );
};

export default Auth;
