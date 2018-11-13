import React from "react";
import { Redirect, Route } from "react-router-dom";
import RouteWithLayout from "../route-with-layout";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ layout, component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <RouteWithLayout layout={layout} component={component} {...rest} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
