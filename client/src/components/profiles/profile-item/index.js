import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Row, Col, List, Card, Avatar, Button } from "antd";
import isEmpty from "../../../validation/is-empty";

import styles from "./ProfileItem.module.css";

const { Meta } = Card;

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <List.Item>
        <Card className={styles["card"]}>
          <Meta
            avatar={<Avatar size={148} src={profile.user.avatar} />}
            description={
              <Row>
                <Col span={16}>
                  <h3 className="mb-0">{profile.user.name}</h3>
                  <p className={styles["description"]}>
                    {profile.status}{" "}
                    {isEmpty(profile.company) ? null : (
                      <span>at {profile.company}</span>
                    )}
                  </p>
                  <p className={styles["description"]}>
                    {isEmpty(profile.location) ? null : (
                      <span>{profile.location}</span>
                    )}
                  </p>
                  <Button type="primary" size="large">
                    <Link to={`/profile/${profile.handle}`}>View Profile</Link>
                  </Button>
                </Col>
                <Col span={8}>
                  <h4>Skill Set</h4>
                  <List
                    bordered
                    className="background-color"
                    size="large"
                    dataSource={profile.skills.slice(0, 4)}
                    renderItem={skill => (
                      <List.Item className={styles["list-item-wrapper"]}>
                        <i className="fa fa-check pr-1" />
                        {skill}
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            }
          />
        </Card>
      </List.Item>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
