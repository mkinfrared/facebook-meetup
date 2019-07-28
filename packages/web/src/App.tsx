import { AppProps } from "App.type";
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Routes from "routes";
import { getAnswers } from "store/reducers/answers/actions";
import { fetchUser } from "store/reducers/user/actions";

import css from "App.module.scss";

class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchUser();
    this.props.getAnswers();
  }

  render() {
    return (
      <BrowserRouter>
        <div className={css.App}>
          <div className={css.content}></div>
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  fetchUser,
  getAnswers
};

export default connect(
  null,
  mapDispatchToProps
)(App);
