import React, { Component } from "react";
import { decorate, observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import RegisterView from "../components/register-view/RegisterView";

class RegisterPage extends Component {
  email = "";
  password = "";
  password2 = "";
  name = "";

  componentDidMount() {
    if (this.props.store.authStore.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillUnmount() {
    this.props.store.errorStore.clearErrors();
    this.clearVariables();
  }

  clearVariables = () => {
    this.email = "";
    this.password = "";
    this.password2 = "";
    this.name = "";
  };

  onChange = event => {
    this[event.target.name] = event.target.value;
  };

  onSubmit = (event, history) => {
    event.preventDefault();

    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password,
      password2: this.password2
    };

    this.props.store.authStore.registerUser(newUser, history);
  };

  render() {
    return (
      <RegisterView
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        email={this.email}
        password={this.password}
        password2={this.password2}
        name={this.name}
        errors={this.props.store.errorStore.errors}
      />
    );
  }
}

RegisterPage.propTypes = {
  store: PropTypes.object.isRequired
};

decorate(RegisterPage, {
  email: observable,
  password: observable,
  password2: observable,
  name: observable,
  onSubmit: action,
  onChange: action
});

export default inject(["store"])(observer(RegisterPage));
