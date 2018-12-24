import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import Footer from "../footer/Footer";
import logo from "../../../../assets/logo.svg";

import styles from "./EmptyLayoutView.module.css";

const { Content } = Layout;

class EmptyLayoutView extends PureComponent {
  render() {
    return (
      <Layout className={styles.container}>
        <div className="text-center">
          <Link className={styles["link-color"]} to="/">
            <div className={styles.header}>
              <img alt="logo" className={styles.logo} src={logo} />
              <span className={styles.title}>Company</span>
            </div>
          </Link>
          <div className={styles.desc}>Company Description</div>
        </div>
        <Content className={styles.content}>{this.props.children}</Content>
        <Footer />
      </Layout>
    );
  }
}

export default EmptyLayoutView;
