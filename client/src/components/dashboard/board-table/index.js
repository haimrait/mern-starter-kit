import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { Card, Table, Icon, message, Spin } from "antd";

import styles from "./BoardTable.module.css";

class BoardTable extends Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
    start: 0,
    count: 5
  };

  getData = callback => {
    debugger;
    axios
      .get(`/api/channels/${this.state.count}/${this.state.start}`)
      .then(res => {
        callback(res);
      })
      .catch(err => {});
  };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        data: res.data
      });
    });
  }

  handleInfiniteOnLoad = () => {
    debugger;
    let data = this.state.data;
    this.setState({
      loading: true
    });
    if (data.length < this.state.count) {
      message.warning("Infinite List loaded all");
      this.setState({
        hasMore: false,
        loading: false
      });
      return;
    }
    this.getData(res => {
      data = data.concat(res.data);
      this.setState({
        data,
        loading: false
      });
    });
  };

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

    return (
      <Card>
        <div className="mb-20">
          <h1 className={styles["title"]}>All Distribution Channels</h1>
          <Link to="" className={`${styles["export"]} f-r`}>
            <span className="mr-3">Export</span>
            <Icon type="download" />
          </Link>
        </div>
        <div className={styles["demo-infinite-container"]}>
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.handleInfiniteOnLoad}
            hasMore={!this.state.loading && this.state.hasMore}
            useWindow={false}
          >
            <Table
              rowKey={"_id"}
              columns={columns}
              dataSource={this.state.data}
              pagination={false}
            />
            {this.state.loading && this.state.hasMore && (
              <div className={styles["demo-loading-container"]}>
                <Spin />
              </div>
            )}
          </InfiniteScroll>
        </div>
      </Card>
    );
  }
}

BoardTable.propTypes = {};

export default BoardTable;
