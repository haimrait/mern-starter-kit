import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import RegisterForm from "../register-form/RegisterForm";

class RegisterView extends PureComponent {
  render() {
    return (
      <Row className="register" type="flex" justify="center">
        <Col span={24}>
          <h1 className="text-center">Sign Up</h1>
          <p className="text-center">Create your DevConnector account</p>
          <RegisterForm
            onChange={this.props.onChange}
            onSubmit={this.props.onSubmit}
            email={this.props.email}
            password={this.props.password}
            name={this.props.name}
            password2={this.props.password2}
            errors={this.props.errors}
          />
        </Col>
      </Row>
    );
  }
}

RegisterView.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  password2: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
};

export default RegisterView;
