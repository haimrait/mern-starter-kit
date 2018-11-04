import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../../validation/is-empty";
import { Row, Col, Card } from "antd";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(" ")[0];

    // Skill List
    const skills = profile.skills.map((skill, index) => (
      <Col key={index} span={4} className="lead1">
        <i className="fa fa-check" /> {skill}
      </Col>
    ));

    return (
      <Row>
        <Col span={24}>
          <Card className="mt-3 bg-light" bordered>
            <h3 className="text-center1 primary-color">
              {firstName}
              's Bio
            </h3>
            <p className="lead1">
              {isEmpty(profile.bio) ? (
                <span>{firstName} does not have a bio</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
            <hr />
            <h3 className="text-center1 primary-color">Skill Set</h3>
            <Row>{skills}</Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
