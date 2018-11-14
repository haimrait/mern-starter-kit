import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import Footer from "../footer";
import logo from "../../../img/logo.svg";

import styles from "./EmptyLayout.module.css";

const { Content } = Layout;

class EmptyLayout extends Component {
  render() {
    return (
      <Layout className={styles.container}>
        <div className="text-center">
          <Link to="/">
            <div className={styles.header}>
              <img alt="logo" className={styles.logo} src={logo} />
              <span className={styles.title}>Ant Design</span>
            </div>
          </Link>
          <div className={styles.desc}>
            Ant Design 是西湖区最具影响力的 Web 设计规范
          </div>
        </div>
        <Content className={styles.content}>{this.props.children}</Content>
        <Footer />
      </Layout>
    );
  }
}

export default EmptyLayout;
