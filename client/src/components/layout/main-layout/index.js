import React, { Component } from "react";
import { Layout } from "antd";
import NavBar from "../nav-bar";
import SideBar from "../side-bar";
import Footer from "../footer";

import styles from "./MainLayout.module.css";

const { Content } = Layout;

class MainLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <SideBar />
        <Layout>
          <NavBar />
          <Content className={styles.content}>{this.props.children}</Content>
          <Footer />
        </Layout>
      </React.Fragment>
    );
  }
}

export default MainLayout;
