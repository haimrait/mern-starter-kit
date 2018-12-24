import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { observer, inject } from "mobx-react";
import LandingView from "../components/landing-view/LandingView";

class Landing extends Component {
  componentDidMount() {
    if (this.props.store.authStore.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return <LandingView />;
  }
}

Landing.propTypes = {
  store: PropTypes.object.isRequired
};

export default inject(["store"])(observer(Landing));
