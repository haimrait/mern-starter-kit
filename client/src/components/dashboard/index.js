import React, { Component } from "react";
import { Row, Col } from "antd";
import BoardSmallItem from "./board-small-item";
import BoardChart from "./board-chart";
import BoardTable from "./board-table";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Row type="flex" justify="space-between">
          <Col span={11}>
            <Row className="mb-20" type="flex" justify="space-between">
              <Col span={11}>
                <BoardSmallItem
                  content={"54"}
                  lift={"5"}
                  percent={false}
                  positive={true}
                  title={"# of direct distribution channels"}
                  metadata={"Since last quarter"}
                />
              </Col>
              <Col span={11}>
                <BoardSmallItem
                  content={"1230"}
                  lift={"1.23"}
                  title={"# of Products sold through channels"}
                  metadata={"Since Yesterday"}
                />
              </Col>
            </Row>
            <Row className="mb-20" type="flex" justify="space-between">
              <Col span={11}>
                <BoardSmallItem
                  content={"54"}
                  lift={"5"}
                  title={"# of direct distribution channels"}
                  metadata={"Since last quarter"}
                />
              </Col>
              <Col span={11}>
                <BoardSmallItem
                  content={"12320"}
                  lift={"1.23"}
                  title={"# of passengers planned for today"}
                  metadata={"Since Yesterday"}
                />
              </Col>
            </Row>
          </Col>
          <Col span={12}>
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
