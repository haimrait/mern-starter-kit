import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import { Row, Col } from "antd";

class LoginView extends PureComponent {
  render() {
    return (
      <Row className="login" type="flex" justify="center">
        <Col span={24}>
          <h1 className="text-center">Log In</h1>
          <p className="text-center">Sign in to your application account</p>
          <LoginForm
            onChange={this.props.onChange}
            onSubmit={this.props.onSubmit}
            email={this.props.email}
            password={this.props.password}
            errors={this.props.errors}
          />
        </Col>
      </Row>
    );
  }
}

LoginView.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
};

export default LoginView;
