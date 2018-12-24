import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { PropTypes } from "prop-types";
import EmptyLayoutView from "../components/empty-layout-view/EmptyLayoutView";

class EmptyLayout extends Component {
  render() {
    return <EmptyLayoutView children={this.props.children} />;
  }
}

EmptyLayout.propTypes = {
  store: PropTypes.object.isRequired
};

export default inject(["store"])(observer(EmptyLayout));
