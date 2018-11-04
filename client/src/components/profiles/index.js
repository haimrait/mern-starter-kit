import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/spinner/index";
import ProfileItem from "./profile-item";
import { Row, Col, List } from "antd";
import { getProfiles } from "../../actions/profileActions";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = (
          <List
            grid={{ span: 24 }}
            dataSource={profiles}
            renderItem={profile => (
              <ProfileItem key={profile._id} profile={profile} />
            )}
          />
        );
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }

    return (
      <div className="profiles">
        <Row type="flex" justify="center">
          <Col span={24}>
            <h1 className="display-41 text-center1 mb-21">
              Developer Profiles
            </h1>
            <p className="lead1 text-center1">
              Browse and connect with developers
            </p>
            {profileItems}
          </Col>
        </Row>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
