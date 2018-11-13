import React, { Component } from "react";
import { Layout } from "antd";
import NavBar from "../nav-bar";
import SideBar from "../side-bar";
import Footer from "../footer";

const { Content } = Layout;

class BasicLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <SideBar />
        <Layout>
          <NavBar />
          <Content>{this.props.children}</Content>
          <Footer />
        </Layout>
      </React.Fragment>
    );
  }
}

export default BasicLayout;
