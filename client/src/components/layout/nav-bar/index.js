import React, { Component } from "react";
import { Layout, Dropdown, Avatar, Menu, Icon, Badge } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";

import styles from "./Header.module.css";

const { Header } = Layout;

class NavBar extends Component {
  onLogoutClick = e => {
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    const menu = (
      <Menu>
        <Menu.Item key="userinfo">
          <Icon type="setting" />
          <span>Account Settings</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout" onClick={this.onLogoutClick}>
          <Icon type="logout" />
          <span>Logout</span>
        </Menu.Item>
      </Menu>
    );

    return (
      <Header className={styles.header}>
        <div className={styles["header-wrapper"]}>
          <Icon className={`${styles.icon} m-10`} type="search" key="Icon" />
          <Badge className={"m-10"} count={3} dot>
            <Icon className={styles.icon} type="bell" />
          </Badge>
          <Dropdown className={"m-10"} overlay={menu}>
            <span>
              <Avatar size="large" src={user.avatar} alt="avatar" />
            </span>
          </Dropdown>
        </div>
      </Header>
    );
  }
}

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavBar);
