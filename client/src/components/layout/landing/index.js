import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { observer, inject } from "mobx-react";
import { Row, Col, Button } from "antd";

import styles from "./Landing.module.css";

class Landing extends Component {
  componentDidMount() {
    if (this.props.authStore.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className={styles["landing"]}>
        <div className={`${styles["dark-overlay"]} ${styles["landing-inner"]}`}>
          <Row className="text-center">
            <Col span={24}>
              <h1 className={styles["site-name"]}>Avian</h1>
              <p className={styles["site-desc"]}>
                Avian is a multiple distribution channels manager for airlines.{" "}
              </p>
            </Col>
          </Row>
          <Row className="text-center" type="flex" align="middle">
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
              <Button href="/login" size={"large"}>
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
  authStore: PropTypes.object.isRequired
};

export default inject(["authStore"])(observer(Landing));
