import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Icon } from "antd";

import styles from "./BoardSmallItem.module.css";

class BoardSmallItem extends Component {
  render() {
    return (
      <Card>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.content}>
          {this.props.content.toLocaleString()}
        </div>
        <div
          className={this.props.positive ? styles.positive : styles.negative}
        >
          {this.props.positive ? (
            <Icon type="arrow-up" className="mr-3" />
          ) : (
            <Icon type="arrow-down" className="mr-3" />
          )}
          {this.props.percent ? this.props.lift + "%" : this.props.lift}
        </div>
        <span className={styles.metadata}>{this.props.metadata}</span>
      </Card>
    );
  }
}

BoardSmallItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  lift: PropTypes.string.isRequired,
  percent: PropTypes.bool.isRequired,
  positive: PropTypes.bool.isRequired,
  metadata: PropTypes.string.isRequired
};

BoardSmallItem.defaultProps = {
  percent: true,
  positive: false
};

export default BoardSmallItem;
