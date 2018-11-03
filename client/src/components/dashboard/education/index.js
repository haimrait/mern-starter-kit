import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteEducation } from "../../../actions/profileActions";
import { Table, Button } from "antd";

class Education extends Component {
  onDeleteClick = id => {
    this.props.deleteEducation(id);
  };

  componentWillMount() {
    this.columns = [
      {
        title: "School",
        dataIndex: "school",
        key: "school"
      },
      {
        title: "Degree",
        dataIndex: "degree",
        key: "degree"
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
          return <h4>Education Credentials</h4>;
        }}
        dataSource={this.props.education}
        columns={this.columns}
      />
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
