import React, { PureComponent } from "react";
import { PropTypes } from "prop-types";
import { Layout } from "antd";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Footer from "./Footer";

import styles from "./MainLayoutView.module.css";

const { Content } = Layout;

class MainLayoutView extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <SideBar
          onCollapse={this.props.onCollapse}
          collapsed={this.props.collapsed}
        />
        <Layout>
          <NavBar
            onLogoutClick={this.props.onLogoutClick}
            user={this.props.user}
          />
          <Content className={styles.content}>{this.props.children}</Content>
          <Footer />
        </Layout>
      </React.Fragment>
    );
  }
}

MainLayoutView.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  collapsed: PropTypes.bool.isRequired,
  onCollapse: PropTypes.func.isRequired
};

export default MainLayoutView;
