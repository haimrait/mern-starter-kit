import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Layout } from "antd";
import { Provider } from "react-redux";
import store from "./store";
import RouteWithLayout from "./common/route-with-layout";
import PrivateRoute from "./common/private-route";
import MainLayout from "./components/layout/main-layout";
import EmptyLayout from "./components/layout/empty-layout";
import Landing from "./components/layout/landing";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import NotFound from "./components/not-found";
import Dashboard from "./components/dashboard";

import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout className="app">
            <Switch>
              <Route exact path="/" component={Landing} />
              <RouteWithLayout
                exact
                layout={EmptyLayout}
                path="/register"
                component={Register}
              />
              <RouteWithLayout
                exact
                layout={EmptyLayout}
                path="/login"
                component={Login}
              />
              <PrivateRoute
                exact
                layout={MainLayout}
                path="/dashboard"
                component={Dashboard}
              />
              <RouteWithLayout
                exact
                layout={EmptyLayout}
                path="*"
                component={NotFound}
              />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
