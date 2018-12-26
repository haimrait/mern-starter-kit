import React, { Component } from "react";
import { decorate, observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import LoginView from "../components/login-view/LoginView";

class LoginPage extends Component {
  email = "";
  password = "";

  componentWillUnmount() {
    this.props.store.errorStore.clearErrors();
    this.clearLocalVariables();
  }

  clearLocalVariables = () => {
    this.email = "";
    this.password = "";
  };

  onChange = event => {
    this[event.target.name] = event.target.value;
  };

  onSubmit = event => {
    event.preventDefault();

    const userData = {
      email: this.email,
      password: this.password
    };

    this.props.store.authStore.loginUser(userData);
  };

  render() {
    if (this.props.store.authStore.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    return (
      <LoginView
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        email={this.email}
        password={this.password}
        errors={this.props.store.errorStore.errors}
      />
    );
  }
}

LoginPage.propTypes = {
  store: PropTypes.object.isRequired
};

decorate(LoginPage, {
  email: observable,
  password: observable,
  onSubmit: action,
  onChange: action,
  clearStore: action
});

export default inject("store")(observer(LoginPage));
