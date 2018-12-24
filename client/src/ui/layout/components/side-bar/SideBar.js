import React from "react";
import { Layout, Menu, Icon } from "antd";
import { ReactComponent as ArchiveSVG } from "../../../../assets/icons/archive.svg";

import styles from "./SideBar.module.css";

const { Sider } = Layout;

const SideBar = ({ collapsed, onCollapse }) => {
  return (
    <Sider
      className={`${styles.sider} sider`}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
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
};

export default SideBar;
