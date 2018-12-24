import React from "react";
import { Layout } from "antd";
import styles from "./Footer.module.css";

const { Footer } = Layout;

export default () => {
  return (
    <Footer className={styles.footer}>
      Copyright &copy; {new Date().getFullYear()} Cheburashka
    </Footer>
  );
};
