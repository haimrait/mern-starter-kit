import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import Footer from "../footer";
import logo from "../../../img/logo.svg";

import styles from "./EmptyLayout.module.css";

const { Content } = Layout;

class EmptyLayout extends Component {
  render() {
    return (
      <Layout className={styles.container}>
        <div className={styles.top}>
          <Link to="/">
            <Row
              className={styles.header}
              type="flex"
              justify="center"
              align="middle"
            >
              <Col span={1}>
                <img alt="logo" className={styles.logo} src={logo} />
              </Col>
              <Col span={3}>
                <span className={styles.title}>Ant Design</span>
              </Col>
            </Row>
          </Link>
          <div className={styles.desc}>
            Ant Design 是西湖区最具影响力的 Web 设计规范
          </div>
        </div>
        <Content className={styles.content}>{this.props.children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default EmptyLayout;
