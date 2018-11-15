import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Icon } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

// import styles from "./BoardSmallItem.module.css";

class BoardChart extends Component {
  render() {
    const data = [
      { name: "Mon", uv: 5000 },
      { name: "Tue", uv: 7500 },
      { name: "Wed", uv: 12000 },
      { name: "Thu", uv: 6000 },
      { name: "Fri", uv: 12300 },
      { name: "Sat", uv: 17000 },
      { name: "Sun", uv: 8000 },
      { name: "Mon", uv: 15000 }
    ];

    return (
      <Card>
        <LineChart
          width={600}
          height={272}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#FF4D2C"
            strokeWidth="2"
            activeDot={{
              stroke: "#FF4D2C",
              strokeWidth: 2,
              r: 5,
              fill: "#fff"
            }}
          />
        </LineChart>
      </Card>
    );
  }
}

BoardChart.propTypes = {};

export default BoardChart;
