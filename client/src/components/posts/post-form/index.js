import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../../common/text-area-field-group";
import { Form, Card, Button } from "antd";
import { addPost } from "../../../actions/postActions";

import styles from "./PostForm.module.css";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const { user } = this.props.auth;
    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
    this.setState({ text: "" });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3">
        <Card
          bordered
          className={styles["card"]}
          headStyle={{
            color: "#fff",
            backgroundColor: "#17a2b8",
            fontWeight: "400"
          }}
          title="Say Somthing..."
        >
          <Form noValidate onSubmit={this.onSubmit}>
            <TextAreaFieldGroup
              placeholder="Create a post"
              name="text"
              value={this.state.text}
              onChange={this.onChange}
              error={errors.text}
              className="fs-1"
            />
            <Button size="large" className={styles["submit"]} htmlType="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
