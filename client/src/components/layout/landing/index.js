import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Row, Col, Button } from "antd";

import styles from "./Landing.module.css";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className={styles["landing"]}>
        <div
          className={`${styles["dark-overlay"]} ${
            styles["landing-inner"]
          } text-light1`}
        >
          <Row className="text-center1">
            <Col span={24}>
              <h1 className="display-31 mb-41 text-light1">
                Developer Connector
              </h1>
              <p className="lead1">
                Create a developer profile/portfolio, share posts and get help
                from other developers
              </p>
              <hr />
            </Col>
          </Row>
          <Row className="text-center1" type="flex" align="middle">
            <Col
              xl={{ span: 2, offset: 10 }}
              md={{ span: 3, offset: 9 }}
              sm={{ span: 4, offset: 8 }}
              xs={{ span: 6, offset: 6 }}
            >
              <Button href="/register" type="primary" size={"large"}>
                Sign Up
              </Button>
            </Col>
            <Col
              xl={{ span: 2, offset: 0 }}
              md={{ span: 3, offset: 0 }}
              sm={{ span: 4, offset: 0 }}
              xs={{ span: 6, offset: 0 }}
            >
              <Button to="/login" size={"large"}>
                Login
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
