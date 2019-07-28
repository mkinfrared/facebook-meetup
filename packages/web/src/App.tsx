import { AppProps } from "App.type";
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Routes from "routes";
import { fetchUser } from "store/reducers/user/actions";

import css from "App.module.scss";

class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchUser();
  }

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

const mapDispatchToProps = {
  fetchUser
};

export default connect(
  null,
  mapDispatchToProps
)(App);
