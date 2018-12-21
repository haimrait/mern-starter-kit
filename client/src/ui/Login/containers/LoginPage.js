import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
import LoginView from "../components/LoginView";

class LoginPage extends Component {
  componentDidMount() {
    // Moved to render because componentDidUpdate doesnt work
    // debugger;
    // if (this.props.store.authStore.isAuthenticated) {
    //   this.props.history.push("/dashboard");
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Mobx did not render this function for me :(
    // debugger;
    // if (this.props.store.authStore.isAuthenticated) {
    //   this.props.history.push("/dashboard");
    // }
  }

  componentWillUnmount() {
    this.props.store.errorStore.clearErrors();
    this.props.store.loginStore.clearStore();
  }

  render() {
    if (this.props.store.authStore.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

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
