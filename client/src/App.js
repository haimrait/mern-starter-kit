import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { Provider } from "mobx-react";
import rootStore from "./stores/RootStore";
import RouteWithLayout from "./ui/common/components/route-with-layout";
import PrivateRoute from "./ui/common/components/private-route";
import MainLayout from "./ui/layout/containers/MainLayout";
import EmptyLayout from "./ui/layout/containers/EmptyLayout";
import LandingPage from "./ui/landing/containers/LandingPage";
import RegisterPage from "./ui/register/containers/RegisterPage";
import LoginPage from "./ui/login/containers/LoginPage";
import NotFoundPage from "./ui/not-found/containers/NotFoundPage";
import DashboardPage from "./ui/dashboard/containers/DashboardPage";

import "./App.css";

// For easier debugging
window._____APP_STATE_____ = rootStore;

class App extends Component {
  render() {
    return (
      <Provider store={rootStore}>
        <Router>
          <Layout className="app">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <RouteWithLayout
                exact
                layout={EmptyLayout}
                path="/register"
                component={RegisterPage}
              />
              <RouteWithLayout
                exact
                layout={EmptyLayout}
                path="/login"
                component={LoginPage}
              />
              <PrivateRoute
                exact
                layout={MainLayout}
                path="/dashboard"
                component={DashboardPage}
              />
              <RouteWithLayout
                exact
                layout={EmptyLayout}
                path="*"
                component={NotFoundPage}
              />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
