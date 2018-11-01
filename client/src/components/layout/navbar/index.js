import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Col, Row, Avatar } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { clearCurrentProfile } from "../../../actions/profileActions";

import styles from "./Navbar.module.css";

const { Header } = Layout;

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <React.Fragment>
        <Col span={1} offset={17}>
          <Link className="nav-link1" to="/feed">
            Post Feed
          </Link>
        </Col>
        <Col span={1}>
          <Link className="nav-link1" to="/dashboard">
            Dashboard
          </Link>
        </Col>
        <Col span={2}>
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
        <Col span={1} offset={19}>
          <Link className="nav-link1" to="/register">
            Sign Up
          </Link>
        </Col>
        <Col span={1}>
          <Link className="nav-link1" to="/login">
            Login
          </Link>
        </Col>
      </React.Fragment>
    );

    return (
      <Header className="bg-dark1">
        <Row>
          <Col span={2}>
            <Link
              className={`${styles["header-logo-text"]} lead1 text-light1`}
              to="/"
            >
              DevConnector
            </Link>
          </Col>
          <Col span={1}>
            <Link className="nav-link1" to="/profiles">
              Developers
            </Link>
          </Col>
          {isAuthenticated ? authLinks : guestLinks}
        </Row>
      </Header>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
