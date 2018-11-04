import React, { Component } from "react";
import Moment from "react-moment";
import { Row, Col, List } from "antd";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    // const expItems = (

    // );

    // const eduItems = (

    // );

    return (
      <Row className="mt-3" type="flex" justify="space-between" align="top">
        <Col span={11}>
          <h3 className="text-center1 primary-color mb-0">Experience</h3>
          {experience.length > 0 ? (
            <List
              bordered
              dataSource={experience}
              renderItem={exp => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <div>
                        <h4>{exp.company}</h4>
                        <p>
                          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
                          {exp.to === null ? (
                            " Now"
                          ) : (
                            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
                          )}
                        </p>
                      </div>
                    }
                    description={
                      <React.Fragment>
                        <p>
                          <strong>Position:</strong> {exp.title}
                        </p>
                        <p>
                          {exp.location === "" ? null : (
                            <span>
                              <strong>Location: </strong> {exp.location}
                            </span>
                          )}
                        </p>
                        <p>
                          {exp.description === "" ? null : (
                            <span>
                              <strong>Description: </strong> {exp.description}
                            </span>
                          )}
                        </p>
                      </React.Fragment>
                    }
                  />
                </List.Item>
              )}
            />
          ) : (
            <p className="text-center1">No Experience Listed</p>
          )}
        </Col>

        <Col span={11}>
          <h3 className="text-center1 primary-color mb-0">Education</h3>
          {education.length > 0 ? (
            <List
              bordered
              dataSource={education}
              renderItem={edu => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <div>
                        <h4>{edu.school}</h4>
                        <p>
                          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
                          {edu.to === null ? (
                            " Now"
                          ) : (
                            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
                          )}
                        </p>
                      </div>
                    }
                    description={
                      <React.Fragment>
                        <p>
                          <strong>Degree:</strong> {edu.degree}
                        </p>
                        <p>
                          {edu.fieldofstudy === "" ? null : (
                            <span>
                              <strong>Field Of Study: </strong>{" "}
                              {edu.fieldofstudy}
                            </span>
                          )}
                        </p>
                        <p>
                          {edu.description === "" ? null : (
                            <span>
                              <strong>Description: </strong> {edu.description}
                            </span>
                          )}
                        </p>
                      </React.Fragment>
                    }
                  />
                </List.Item>
              )}
            />
          ) : (
            <p className="text-center1">No Education Listed</p>
          )}
        </Col>
      </Row>
    );
  }
}

export default ProfileCreds;
