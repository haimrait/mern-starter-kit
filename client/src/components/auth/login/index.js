import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "antd";
import TextFieldGroup from "../../../common/text-field-group";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;

    return (
      <Row className="login" type="flex" justify="center">
        <Col span={24}>
          <h1 className="text-center">Log In</h1>
          <p className="text-center">Sign in to your application account</p>
          <Form noValidate onSubmit={this.onSubmit}>
            <TextFieldGroup
              placeholder="Email Address"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextFieldGroup
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
            />
            <Row type="flex" justify="center" align="middle">
              <Col span={24}>
                <Button
                  size={"large"}
                  className="width-100"
                  type="primary"
                  htmlType="submit"
                >
                  Login
                </Button>
              </Col>
            </Row>
            <Row className="mt-10">
              <Col span={24}>
                <Link className="f-r" to="/register">
                  Sign Up
                </Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const WrappedLogin = Form.create()(Login);

export default connect(
  mapStateToProps,
  { loginUser }
)(WrappedLogin);
