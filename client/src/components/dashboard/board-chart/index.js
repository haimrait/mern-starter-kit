import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import SelectList from "../../../common/select-list";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import Legend from "./legend";

import styles from "./BoardChart.module.css";

class CustomTooltip extends Component {
  render() {
    const { active } = this.props;

    if (active) {
      const { payload } = this.props;
      return (
        <div className={styles.tooltip}>
          <span className={styles.text}>
            {payload[0].value.toLocaleString()}
          </span>
        </div>
      );
    }

    return null;
  }
}

class BoardChart extends Component {
  render() {
    const data = [
      { name: "Mon", current_week: 5000, previous_week: 6000 },
      { name: "Tue", current_week: 7500, previous_week: 18000 },
      { name: "Wed", current_week: 12000, previous_week: 15000 },
      { name: "Thu", current_week: 6000, previous_week: 10000 },
      { name: "Fri", current_week: 12300, previous_week: 15000 },
      { name: "Sat", current_week: 17000, previous_week: 12000 },
      { name: "Sun", current_week: 8000, previous_week: 5000 },
      { name: "Mon", current_week: 15000, previous_week: 8000 }
    ];

    return (
      <Card className={styles.card}>
        <Row className="mb-20">
          <Col span={24}>
            <h1 className={styles.title}>Traffic Data per Distribution Type</h1>
            <SelectList
              className="f-r"
              defaultValue={"NDC"}
              options={[
                { value: "ndc", text: "NDC" },
                { value: "api", text: "API" },
                { value: "gdc", text: "GDC" }
              ]}
            />
          </Col>
        </Row>
        <Row className="mb-20">
          <Col xxl={4} xl={3} lg={4} md={5} sm={8} xs={12}>
            <Legend
              number={1234}
              title={"Current Week"}
              dotColorClass={"red"}
            />
          </Col>
          <Col xxl={4} xl={3} lg={4} md={5} sm={8} xs={12}>
            <Legend
              number={1900}
              title={"Previous Week"}
              dotColorClass={"grey"}
            />
          </Col>
        </Row>
        <ResponsiveContainer width={"100%"} height={272}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis tickLine={false} dataKey="name" />
            <YAxis tickLine={false} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="current_week"
              stroke="#FF4D2C"
              strokeWidth="2"
              activeDot={{
                stroke: "#FF4D2C",
                strokeWidth: 2,
                r: 5,
                fill: "#fff"
              }}
            />
            <Line
              type="monotone"
              dataKey="previous_week"
              stroke="#CCCCCC"
              strokeDasharray="5 5"
              strokeWidth="2"
              dot={false}
              activeDot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    );
  }
}

BoardChart.propTypes = {};

export default BoardChart;
