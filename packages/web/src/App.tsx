import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "routes";

import css from "App.module.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className={css.App}>
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
