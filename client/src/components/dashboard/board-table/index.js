import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, Table, Icon, Row, Col } from "antd";

import styles from "./BoardTable.module.css";

class BoardTable extends Component {
  render() {
    const columns = [
      {
        title: "CHANNEL NAME",
        dataIndex: "channel_name",
        key: "channel_name"
      },
      {
        title: "NUMBER OF RESERVATIONS",
        dataIndex: "number_of_reservations",
        key: "number_of_reservations"
      },
      {
        title: "NUMBER OF FLIGHTS",
        dataIndex: "number_of_flights",
        key: "number_of_flights"
      },
      {
        title: "# OF PASSENGERS",
        dataIndex: "passengers",
        key: "passengers"
      },
      {
        title: "AVG # OF PRODUCTS SOLD",
        dataIndex: "products_sold",
        key: "products_sold"
      },
      {
        title: "REVENUE",
        dataIndex: "revenue",
        key: "revenue"
      },
      {
        title: "CONNECTION TYPE",
        dataIndex: "connection_types",
        key: "connection_types",
        render: connectionTypes => {
          return connectionTypes.join(" | ");
        }
      }
    ];

    const data = [
      {
        _id: "1",
        channel_name: "SkyScanner",
        number_of_reservations: 4230,
        number_of_flights: 234,
        passengers: 2300,
        products_sold: 4.23,
        revenue: 24340,
        connection_types: ["NDC", "API"]
      },
      {
        _id: "2",
        channel_name: "Agoda.com",
        number_of_reservations: 4230,
        number_of_flights: 802,
        passengers: 2394,
        products_sold: 3,
        revenue: 234340,
        connection_types: ["API"]
      },
      {
        _id: "3",
        channel_name: "www.latam.com",
        number_of_reservations: 4230,
        number_of_flights: 802,
        passengers: 1890,
        products_sold: 1.4,
        revenue: 122340,
        connection_types: ["DIRECT"]
      },
      {
        _id: "4",
        channel_name: "AmadeusX",
        number_of_reservations: 4230,
        number_of_flights: 802,
        passengers: 200,
        products_sold: 1.23,
        revenue: 243340,
        connection_types: ["NDC", "API"]
      },
      {
        _id: "5",
        channel_name: "Sabre Beyond",
        number_of_reservations: 4230,
        number_of_flights: 802,
        passengers: 1890,
        products_sold: 1,
        revenue: 243340,
        connection_types: ["NDC", "API"]
      },
      {
        _id: "6",
        channel_name: "Amadeus",
        number_of_reservations: 4230,
        number_of_flights: 802,
        passengers: 12043,
        products_sold: 1,
        revenue: 324340,
        connection_types: ["GDC"]
      }
    ];

    return (
      <Card>
        <div className="mb-20">
          <h1 className={styles["title"]}>All Distribution Channels</h1>
          <Link to="" className={`${styles["export"]} f-r`}>
            <span className="mr-3">Export</span>
            <Icon type="download" />
          </Link>
        </div>
        <Table columns={columns} dataSource={data} />
      </Card>
    );
  }
}

BoardTable.propTypes = {};

export default BoardTable;
