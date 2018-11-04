import React, { Component } from "react";
import { Row, Col, Avatar, Card } from "antd";
import { Link } from "react-router-dom";
import isEmpty from "../../../validation/is-empty";

import styles from "./ProfileHeader.module.css";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <Row>
        <Col span={24}>
          <Card bordered className={styles["card"]}>
            <Row type="flex" justify="center" align="middle">
              <Col span={12} className="text-center1">
                <Avatar
                  className={styles["avatar-wrapper"]}
                  src={profile.user.avatar}
                  alt=""
                />
              </Col>
            </Row>
            <Row type="flex" justify="center" align="middle">
              <Col span={12} className="text-center1">
                <h1 className="display-41 mb-3 text-white">
                  {profile.user.name}
                </h1>
                <p className="lead1">
                  {profile.status}{" "}
                  {isEmpty(profile.company) ? null : (
                    <span>at {profile.company}</span>
                  )}
                </p>
                {isEmpty(profile.location) ? null : (
                  <p className="lead1">{profile.location}</p>
                )}
                <p>
                  {isEmpty(profile.website) ? null : (
                    <Link
                      to={profile.website}
                      target="_blank"
                      className="text-white p-2"
                    >
                      <i className="fas fa-globe fa-2x" />
                    </Link>
                  )}

                  {isEmpty(profile.social && profile.social.twitter) ? null : (
                    <Link
                      to={profile.social.twitter}
                      target="_blank"
                      className="text-white p-2"
                    >
                      <i className="fab fa-twitter fa-2x" />
                    </Link>
                  )}

                  {isEmpty(profile.social && profile.social.facebook) ? null : (
                    <Link
                      to={profile.social.facebook}
                      target="_blank"
                      className="text-white p-2"
                    >
                      <i className="fab fa-facebook fa-2x" />
                    </Link>
                  )}

                  {isEmpty(profile.social && profile.social.linkedin) ? null : (
                    <Link
                      to={profile.social.linkedin}
                      target="_blank"
                      className="text-white p-2"
                    >
                      <i className="fab fa-linkedin fa-2x" />
                    </Link>
                  )}

                  {isEmpty(profile.social && profile.social.youtube) ? null : (
                    <Link
                      to={profile.social.youtube}
                      target="_blank"
                      className="text-white p-2"
                    >
                      <i className="fab fa-youtube fa-2x" />
                    </Link>
                  )}

                  {isEmpty(
                    profile.social && profile.social.instagram
                  ) ? null : (
                    <Link
                      to={profile.social.instagram}
                      target="_blank"
                      className="text-white p-2"
                    >
                      <i className="fab fa-instagram fa-2x" />
                    </Link>
                  )}
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ProfileHeader;
