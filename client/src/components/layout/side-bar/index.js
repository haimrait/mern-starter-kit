import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { ReactComponent as ArchiveSVG } from "../../../img/icons/archive.svg";

import styles from "./Sider.module.css";

const { Sider } = Layout;

class SideBar extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        className={`${styles.sider} sider`}
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className={styles.logo} />
        <Menu
          className={styles.menu}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          <Menu.Item key="1">
            <Icon type="dashboard" />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="inbox" />
            <span>Distribution</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="line-chart" />
            <span>Analytics</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon component={ArchiveSVG} />
            <span>Products</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SideBar;
