import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import RegisterView from "../components/register-view/RegisterView";

class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.store.authStore.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillUnmount() {
    this.props.store.errorStore.clearErrors();
    this.props.store.registerStore.clearStore();
  }

  render() {
    return (
      <RegisterView
        onChange={this.props.store.registerStore.onChange}
        onSubmit={this.props.store.registerStore.onSubmit}
        email={this.props.store.registerStore.email}
        password={this.props.store.registerStore.password}
        password2={this.props.store.registerStore.password2}
        name={this.props.store.registerStore.name}
        errors={this.props.store.errorStore.errors}
      />
    );
  }
}

RegisterPage.propTypes = {
  store: PropTypes.object.isRequired
};

export default inject(["store"])(observer(RegisterPage));
