import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import LoginView from "../components/LoginView";

class LoginPage extends Component {
  componentDidMount() {
    if (this.props.store.authStore.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.store.authStore.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillUnmount() {
    this.props.store.errorStore.clearErrors();
    this.props.store.loginStore.clearStore();
  }

  render() {
    return (
      <LoginView
        onChange={this.props.store.loginStore.onChange}
        onSubmit={this.props.store.loginStore.onSubmit}
        email={this.props.store.loginStore.email}
        password={this.props.store.loginStore.password}
        errors={this.props.store.errorStore.errors}
      />
    );
  }
}

LoginPage.propTypes = {
  store: PropTypes.object.isRequired
};

export default inject("store")(observer(LoginPage));
