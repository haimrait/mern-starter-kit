import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table, Button } from "antd";
import Moment from "react-moment";
import { deleteExperience } from "../../../actions/profileActions";

class Experience extends Component {
  onDeleteClick = id => {
    this.props.deleteExperience(id);
  };

  componentWillMount() {
    this.columns = [
      {
        title: "Company",
        dataIndex: "company",
        key: "company"
      },
      {
        title: "Title",
        dataIndex: "title",
        key: "title"
      },
      {
        title: "Years",
        key: "years",
        render: (text, record) => {
          return (
            <React.Fragment>
              <Moment format="YYYY/MM/DD">{record.from}</Moment> -{" "}
              {record.to === null ? (
                " Now"
              ) : (
                <Moment format="YYYY/MM/DD">{record.to}</Moment>
              )}
            </React.Fragment>
          );
        }
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Button
            onClick={() => {
              this.onDeleteClick(record._id);
            }}
            type="danger"
          >
            Delete
          </Button>
        )
      }
    ];
  }

  render() {
    return (
      <Table
        rowKey="_id"
        pagination={false}
        title={() => {
          return <h4>Experience Credentials</h4>;
        }}
        dataSource={this.props.experience}
        columns={this.columns}
      />
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
