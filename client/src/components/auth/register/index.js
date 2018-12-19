import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { Form, Button, Row, Col } from "antd";
import TextFieldGroup from "../../../common/text-field-group";
import { observer, inject } from "mobx-react";

import styles from "./Register.module.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.store.authStore.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.store.errorStore.getErrors() });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.store.authStore.registerUser(newUser, this.props.history);
  };

  render() {
    const errors = this.props.errors;

    return (
      <Row className="register" type="flex" justify="center">
        <Col span={24}>
          <h1 className="text-center">Sign Up</h1>
          <p className="text-center">Create your DevConnector account</p>
          <Form noValidate onSubmit={this.onSubmit}>
            <TextFieldGroup
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextFieldGroup
              placeholder="Email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
              info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
            />
            <TextFieldGroup
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
            />
            <TextFieldGroup
              placeholder="Confirm Password"
              name="password2"
              type="password"
              value={this.state.password2}
              onChange={this.onChange}
              error={this.props.store.errorStore.errors.password2}
            />
            <Row type="flex" justify="center" align="middle">
              <Col span={24}>
                <Button
                  className="width-100"
                  size="large"
                  type="primary"
                  htmlType="submit"
                >
                  Sign Up
                </Button>
              </Col>
            </Row>
            <Row className="mt-10">
              <Col span={24}>
                <Link className={`${styles["link-color"]} f-r`} to="/login">
                  Already have an account?
                </Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}

Register.propTypes = {
  store: PropTypes.object.isRequired
};

export default inject(["store"])(observer(withRouter(Register)));
