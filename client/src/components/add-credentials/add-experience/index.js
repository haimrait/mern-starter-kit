import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../../common/text-field-group";
import DateFieldGroup from "../../common/date-field-group";
import TextAreaFieldGroup from "../../common/text-area-field-group";
import { Col, Row, Form, Button, Checkbox } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addExperience } from "../../../actions/profileActions";

const FormItem = Form.Item;

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      title: "",
      location: "",
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

    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addExperience(expData, this.props.history);
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
      <div className="add-experience">
        <Row>
          <Col span="4">
            <Button>
              <Link to="/dashboard">Go Back</Link>
            </Button>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={24}>
            <h1 className="display-41 text-center1">Add Experience</h1>
            <p className="lead1 text-center1">
              Add any job or position that you have had in the past or current
            </p>
            <small className="display-block pb-31">* = required fields</small>
            <Form noValidate onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="* Company"
                name="company"
                value={this.state.company}
                onChange={this.onChange}
                error={errors.company}
              />
              <TextFieldGroup
                placeholder="* Job Title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                error={errors.title}
              />
              <TextFieldGroup
                placeholder="Location"
                name="location"
                value={this.state.location}
                onChange={this.onChange}
                error={errors.location}
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
                placeholder="Job Description"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
                error={errors.description}
                info="Tell us about the the position"
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addExperience }
)(withRouter(AddExperience));
