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
          <Link className={styles["link-color"]} to="/">
            <div className={styles.header}>
              <img alt="logo" className={styles.logo} src={logo} />
              <span className={styles.title}>Avian</span>
            </div>
          </Link>
          <div className={styles.desc}>
            Avian is a multiple distribution channels manager for airlines.
          </div>
        </div>
        <Content className={styles.content}>{this.props.children}</Content>
        <Footer />
      </Layout>
    );
  }
}

export default EmptyLayout;
