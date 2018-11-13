import React from "react";
import { Route } from "react-router-dom";

const RouteWithLayout = ({ layout, component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      React.createElement(layout, props, React.createElement(component, props))
    }
  />
);

export default RouteWithLayout;
