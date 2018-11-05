import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Col, Row, Avatar, Menu, Drawer, Icon, Button } from "antd";
import windowSize from "react-window-size";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { clearCurrentProfile } from "../../../actions/profileActions";

import styles from "./Navbar.module.css";

const { Header } = Layout;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMenu: false
    };
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <React.Fragment>
        <Col
          xl={{ span: 2, offset: 13 }}
          lg={{ span: 2, offset: 11 }}
          md={{ span: 3, offset: 7 }}
          sm={{ span: 4, offset: 1 }}
          xs={{ span: 4 }}
        >
          <Link className="nav-link1" to="/feed">
            Post Feed
          </Link>
        </Col>
        <Col
          xl={{ span: 2 }}
          lg={{ span: 2 }}
          md={{ span: 3 }}
          sm={{ span: 4 }}
          xs={{ span: 4 }}
        >
          <Link className="nav-link1" to="/dashboard">
            Dashboard
          </Link>
        </Col>
        <Col
          xl={{ span: 2 }}
          lg={{ span: 3 }}
          md={{ span: 3 }}
          sm={{ span: 4 }}
          xs={{ span: 4 }}
        >
          <Link className="nav-link1" to=" " onClick={this.onLogoutClick}>
            <Avatar
              size={"small"}
              src={user.avatar}
              alt={user.name}
              title="You must have a Gravatar connected to your email to display an image"
            />{" "}
            Logout
          </Link>
        </Col>
      </React.Fragment>
    );

    const guestLinks = (
      <React.Fragment>
        <Col xxl={{ span: 1, offset: 18 }} xl={{ span: 3, offset: 19 }}>
          <Link className="nav-link1" to="/register">
            Sign Up
          </Link>
        </Col>
        <Col xxl={{ span: 1 }} xl={{ span: 2 }}>
          <Link className="nav-link1" to="/login">
            Login
          </Link>
        </Col>
      </React.Fragment>
    );

    return (
      <Header className="bg-dark1">
        {this.props.windowWidth > 600 ? (
          <Row>
            <Col
              xl={{ span: 3 }}
              lg={{ span: 4 }}
              md={{ span: 5 }}
              sm={{ span: 7 }}
              xs={{ span: 8 }}
            >
              <Link
                className={`${styles["header-logo-text"]} lead1 text-light1`}
                to="/"
              >
                DevConnector
              </Link>
            </Col>
            <Col
              xl={{ span: 2 }}
              lg={{ span: 2 }}
              md={{ span: 3 }}
              sm={{ span: 4 }}
              xs={{ span: 4 }}
            >
              <Link className="nav-link1" to="/profiles">
                Developers
              </Link>
            </Col>
            {isAuthenticated ? authLinks : guestLinks}
          </Row>
        ) : (
          <React.Fragment>
            <Button
              onClick={() =>
                this.setState({ isShowMenu: !this.state.isShowMenu })
              }
              icon="bars"
              ghost
            />
            <Drawer title="Menu" placement="left" closable={false}>
              <Menu>
                <Menu.Item key="1">
                  <Icon type="mail" />
                  Navigation One
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="calendar" />
                  Navigation Two
                </Menu.Item>
              </Menu>
            </Drawer>
          </React.Fragment>
        )}
      </Header>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  windowWidth: PropTypes.string.is
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default windowSize(
  connect(
    mapStateToProps,
    { logoutUser, clearCurrentProfile }
  )(Navbar)
);
