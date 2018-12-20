import React, { PureComponent } from "react";
import { Row, Col, Button } from "antd";

import styles from "./LandingView.module.css";

class LandingView extends PureComponent {
  render() {
    return (
      <div className={styles["landing"]}>
        <div className={`${styles["dark-overlay"]} ${styles["landing-inner"]}`}>
          <Row className="text-center">
            <Col span={24}>
              <h1 className={styles["site-name"]}>Company</h1>
              <p className={styles["site-desc"]}>Company Description. </p>
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

export default LandingView;
