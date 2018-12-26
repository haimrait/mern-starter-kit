import React, { Component } from "react";
import { observable, decorate, action, computed } from "mobx";
import { observer, inject } from "mobx-react";
import includes from "lodash/includes";
import { PropTypes } from "prop-types";
import MainLayoutView from "../components/main-layout-view/MainLayoutView";

class MainLayout extends Component {
  collapsed = false;

  get checkCollapse() {
    if (includes(this.props.store.windowSizeStore.windowSizes, "sm")) {
      return true;
    }

    return this.collapsed;
  }

  onCollapse = isCollapsed => {
    if (!includes(this.props.store.windowSizeStore.windowSizes, "sm")) {
      this.collapsed = isCollapsed;
    }
  };

  render() {
    return (
      <MainLayoutView
        children={this.props.children}
        onLogoutClick={this.props.store.authStore.logoutUser}
        user={this.props.store.authStore.user}
        collapsed={this.checkCollapse}
        onCollapse={this.onCollapse}
      />
    );
  }
}

MainLayout.propTypes = {
  store: PropTypes.object.isRequired
};

decorate(MainLayout, {
  collapsed: observable,
  onCollapse: action,
  checkCollapse: computed
});

export default inject(["store"])(observer(MainLayout));
