import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, Button, Row, Col } from "antd";
import TextFieldGroup from "../../../common/components/text-field-group";

import styles from "./RegisterForm.module.css";

const RegisterForm = ({
  onSubmit,
  onChange,
  email,
  password,
  name,
  password2,
  errors,
  form,
  history
}) => {
  return (
    <Form
      noValidate
      onSubmit={event => {
        onSubmit(event, history);
      }}
    >
      <TextFieldGroup
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
        error={errors.name}
      />
      <TextFieldGroup
        placeholder="Email"
        name="email"
        type="email"
        value={email}
        onChange={onChange}
        error={errors.email}
        info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
      />
      <TextFieldGroup
        placeholder="Password"
        name="password"
        type="password"
        value={password}
        onChange={onChange}
        error={errors.password}
      />
      <TextFieldGroup
        placeholder="Confirm Password"
        name="password2"
        type="password"
        value={password2}
        onChange={onChange}
        error={errors.password2}
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
  );
};

const wrappedForm = Form.create()(withRouter(RegisterForm));

export default wrappedForm;
