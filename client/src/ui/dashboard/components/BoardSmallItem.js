import React from "react";
import { Card, Icon } from "antd";

import styles from "./BoardSmallItem.module.css";

const BoardSmallItem = ({
  title,
  content,
  lift,
  percent,
  positive,
  metadata
}) => {
  return (
    <Card className={styles.card}>
      <div className={`${styles.title} mb-15`}>{title}</div>
      <div className={`${styles.content} mb-15`}>
        {content.toLocaleString()}
      </div>
      <div className={`${positive ? styles.positive : styles.negative} mb-10`}>
        {positive ? (
          <Icon type="arrow-up" className="mr-3" />
        ) : (
          <Icon type="arrow-down" className="mr-3" />
        )}
        {percent ? lift + "%" : lift}
      </div>
      <span className={styles.metadata}>{metadata}</span>
    </Card>
  );
};

BoardSmallItem.defaultProps = {
  percent: true,
  positive: false
};

export default BoardSmallItem;
