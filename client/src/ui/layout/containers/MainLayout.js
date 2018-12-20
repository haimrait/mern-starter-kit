import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { PropTypes } from "prop-types";
import MainLayoutView from "../components/MainLayoutView";

class MainLayout extends Component {
  render() {
    return (
      <MainLayoutView
        children={this.props.children}
        onLogoutClick={this.props.store.authStore.logoutUser}
        user={this.props.store.authStore.user}
        collapsed={this.props.store.sideBarStore.collapsed}
        onCollapse={this.props.store.sideBarStore.onCollapse}
      />
    );
  }
}

MainLayout.propTypes = {
  store: PropTypes.object.isRequired
};

export default inject(["store"])(observer(MainLayout));
