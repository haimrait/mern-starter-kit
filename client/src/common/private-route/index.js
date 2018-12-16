import React from "react";
import { Redirect, Route } from "react-router-dom";
import RouteWithLayout from "../route-with-layout";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";

const PrivateRoute = ({ layout, component, authStore, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authStore.isAuthenticated === true ? (
        <RouteWithLayout layout={layout} component={component} {...rest} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  authStore: PropTypes.object.isRequired
};

export default inject(["authStore"])(observer(PrivateRoute));
