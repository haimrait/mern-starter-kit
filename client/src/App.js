import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { decorate, observable } from "mobx";
import { Provider } from "mobx-react";
import AuthStore from "./stores/AuthStore"
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

decorate(AuthStore, { isAuthenticated: observable, user: observable });
const authStore = new AuthStore();

class App extends Component {
  render() {
    debugger
    return (
      <Provider authStore={authStore}>
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
