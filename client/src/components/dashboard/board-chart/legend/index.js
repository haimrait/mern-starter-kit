import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";

import styles from "./Legend.module.css";

class Legend extends Component {
  render() {
    return (
      <React.Fragment>
        <Row type="flex" justify="start" align="middle">
          <Col span={24} className={styles.title}>
            {this.props.title}
          </Col>
        </Row>
        <Row type="flex" justify="start" align="middle">
          <Col span={3}>
            <div
              className={`${styles.dot} ${styles[this.props.dotColorClass]}`}
            />
          </Col>
          <Col span={10} className={styles.number}>
            {this.props.number.toLocaleString()}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

Legend.propTypes = {
  title: PropTypes.string.isRequired,
  dotColorClass: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};

export default Legend;
