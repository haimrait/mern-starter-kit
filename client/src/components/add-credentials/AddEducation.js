import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import DateFieldGroup from "../common/DateFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { Col, Row, Form, Button, Checkbox } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEducation } from "../../actions/profileActions";

const FormItem = Form.Item;

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      degree: "",
      fieldofstudy: "",
      from: "",
      to: "",
      current: false,
      description: "",
      errors: {},
      disabled: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addEducation(eduData, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCheck = e => {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="add-education">
        <Row>
          <Col span="4">
            <Button>
              <Link to="/dashboard">Go Back</Link>
            </Button>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={24}>
            <h1 className="display-41 text-center1">Add Education</h1>
            <p className="lead1 text-center1">
              Add any school, bootcamp, etc that you have attended
            </p>
            <small className="display-block pb-31">* = required fields</small>
            <Form noValidate onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="* School"
                name="school"
                value={this.state.school}
                onChange={this.onChange}
                error={errors.school}
              />
              <TextFieldGroup
                placeholder="* Degree or Certification"
                name="degree"
                value={this.state.degree}
                onChange={this.onChange}
                error={errors.degree}
              />
              <TextFieldGroup
                placeholder="* Field of Study"
                name="fieldofstudy"
                value={this.state.fieldofstudy}
                onChange={this.onChange}
                error={errors.fieldofstudy}
              />
              <h6>From Date</h6>
              <DateFieldGroup
                name="from"
                placeholder="YYYY/MM/DD"
                value={this.state.from}
                onChange={this.onChange}
                error={errors.from}
              />
              <h6>To Date</h6>
              <DateFieldGroup
                wrapperClass="mb-21"
                name="to"
                placeholder="YYYY/MM/DD"
                value={this.state.to}
                onChange={this.onChange}
                error={errors.to}
                disabled={this.state.disabled}
              />
              <FormItem>
                <Checkbox
                  name="current"
                  value={this.state.current}
                  checked={this.state.current}
                  onChange={this.onCheck}
                >
                  <h6 className="display-inline">Current Job</h6>
                </Checkbox>
              </FormItem>
              <TextAreaFieldGroup
                className="fs-1"
                placeholder="Program Description"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
                error={errors.description}
                info="Tell us about the program that you were in"
              />
              <Button
                size="large"
                className="submit-btn mt-2"
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addEducation }
)(withRouter(AddEducation));
