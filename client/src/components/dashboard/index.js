import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Row, Button } from "antd";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../common/spinner/index";
import ProfileActions from "./profile-actions";
import Experience from "./experience";
import Education from "./education";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick = e => {
    this.props.deleteAccount();
  };

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <React.Fragment>
            <p className="lead1 text-muted1 mb-21">
              Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </p>
            <ProfileActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <Button
              className="mt-41"
              onClick={this.onDeleteClick}
              type="danger"
            >
              Delete My Account
            </Button>
          </React.Fragment>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead1 text-muted1 mb-21">Welcome {user.name}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Button type="primary" size="large">
              <Link to="/create-profile">Create Profile</Link>
            </Button>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <Row type="flex" justify="center">
          <Col span={24}>
            <h1 className="display-41 mb-11">Dashboard</h1>
            {dashboardContent}
          </Col>
        </Row>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
