import React from "react";
import { Layout, Dropdown, Avatar, Menu, Icon, Badge } from "antd";

import styles from "./NavBar.module.css";

const { Header } = Layout;

const NavBar = ({ user, onLogoutClick }) => {
  const menu = (
    <Menu>
      <Menu.Item key="userinfo">
        <Icon type="setting" />
        <span>Account Settings</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" onClick={onLogoutClick}>
        <Icon type="logout" />
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className={styles.header}>
      <div className={styles["header-wrapper"]}>
        <Icon className={`${styles.icon} m-10`} type="search" key="Icon" />
        <Badge className={"m-10"} count={3} dot>
          <Icon className={styles.icon} type="bell" />
        </Badge>
        <Dropdown className={"m-10"} overlay={menu}>
          <span>
            <Avatar size="large" src={user.avatar} alt="avatar" />
          </span>
        </Dropdown>
      </div>
    </Header>
  );
};

export default NavBar;
