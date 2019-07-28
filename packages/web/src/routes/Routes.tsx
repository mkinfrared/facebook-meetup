import * as React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { compose } from "redux";

import Auth from "components/Auth";
import Form from "components/Form";
import Navigation from "components/Navigation";
import Table from "components/Table";
import { RoutesProps } from "routes/Routes.type";
import { AppState } from "store/reducers";
import { getUserSelector } from "store/reducers/user/selectors";

class Routes extends React.Component<RoutesProps> {
  renderUnauthorizedRoutes = () => {
    return (
      <>
        <Route path="/auth" component={Auth} />
        <Redirect to="/auth" />
      </>
    );
  };

  renderAuthorizedRoutes = () => {
    return (
      <>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/table" component={Table} />
        </Switch>
      </>
    );
  };

  render() {
    const { user } = this.props;

    if (!user.id) {
      return this.renderUnauthorizedRoutes();
    }

    return this.renderAuthorizedRoutes();
  }
}

const mapStateToProps = (state: AppState) => ({
  user: getUserSelector
});

export default compose<React.ComponentClass>(
  withRouter,
  connect(mapStateToProps)
)(Routes);
