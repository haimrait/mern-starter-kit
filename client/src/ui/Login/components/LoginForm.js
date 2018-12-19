import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "antd";
import TextFieldGroup from "../../../common/text-field-group";

import styles from "./LoginForm.module.css";

const LoginForm = ({ onSubmit, onChange, email, password, errors, form }) => {
  return (
    <Form noValidate onSubmit={onSubmit}>
      <TextFieldGroup
        placeholder="Email Address"
        name="email"
        type="email"
        value={email}
        onChange={onChange}
        error={errors.email}
      />
      <TextFieldGroup
        placeholder="Password"
        name="password"
        type="password"
        value={password}
        onChange={onChange}
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
          <Link className={`${styles["link-color"]} f-r`} to="/register">
            Sign Up
          </Link>
        </Col>
      </Row>
    </Form>
  );
};

const wrappedForm = Form.create()(LoginForm);

export default wrappedForm;
