import React, { Component } from "react";
import { Row, Col } from "antd";
import BoardSmallItem from "./board-small-item";
import BoardChart from "./board-chart";
import BoardTable from "./board-table";
import SelectList from "../../common/select-list";

import styles from "./Dashboard.module.css";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="dashboard mb-20" type="flex" align="middle">
          <Col span={24} className={styles["col-wrapper"]}>
            <h1 className={styles["title"]}>Dashboard</h1>
            <SelectList
              className="f-r"
              defaultValue={"This Week"}
              options={[
                { value: "week", text: "This Week" },
                { value: "month", text: "This Month" },
                { value: "year", text: "This Year" }
              ]}
            />
          </Col>
        </Row>
        <Row type="flex" justify="space-between">
          <Col xxl={11} xl={24} lg={24} md={24} sm={24} xs={24}>
            <Row type="flex" justify="space-between">
              <Col
                className="mb-20"
                xxl={11}
                xl={11}
                lg={11}
                md={11}
                sm={24}
                xs={24}
              >
                <BoardSmallItem
                  content={54}
                  lift={"5"}
                  percent={false}
                  positive={true}
                  title={"# of direct distribution channels"}
                  metadata={"Since last quarter"}
                />
              </Col>
              <Col
                className="mb-20"
                xxl={11}
                xl={11}
                lg={11}
                md={11}
                sm={24}
                xs={24}
              >
                <BoardSmallItem
                  content={1230}
                  lift={"1.23"}
                  title={"# of Products sold through channels"}
                  metadata={"Since Yesterday"}
                />
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col
                className="mb-20"
                xxl={11}
                xl={11}
                lg={11}
                md={11}
                sm={24}
                xs={24}
              >
                <BoardSmallItem
                  content={54}
                  lift={"5"}
                  title={"# of direct distribution channels"}
                  metadata={"Since last quarter"}
                />
              </Col>
              <Col
                className="mb-20"
                xxl={11}
                xl={11}
                lg={11}
                md={11}
                sm={24}
                xs={24}
              >
                <BoardSmallItem
                  content={12320}
                  lift={"1.23"}
                  title={"# of passengers planned for today"}
                  metadata={"Since Yesterday"}
                />
              </Col>
            </Row>
          </Col>
          <Col
            xxl={12}
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            className="mb-20"
          >
            <BoardChart />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <BoardTable />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Dashboard;
