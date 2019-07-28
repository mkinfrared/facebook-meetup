import * as React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import Auth from "components/Auth";
import Navigation from "components/Navigation";
import Form from "container/Form";
import Table from "container/Table";
import { compose } from "redux";
import { RoutesProps } from "routes/Routes.type";
import { getUserSelector } from "store/reducers/user/selectors";
import { AppState } from "store/store.type";

import css from "routes/Routes.module.scss";

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
        <div className={css.container}>
          <Switch>
            <Route path="/" exact component={Form} />
            <Route path="/table" component={Table} />
            <Redirect to="/" />
          </Switch>
        </div>
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
  user: getUserSelector(state)
});

export default compose<React.ComponentClass>(
  withRouter,
  connect<ReturnType<typeof mapStateToProps>, {}, RoutesProps, AppState>(
    mapStateToProps
  )
)(Routes);
