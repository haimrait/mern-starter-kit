import React from "react";
import PropTypes from "prop-types";
import { Input, Form } from "antd";

const { TextArea } = Input;
const FormItem = Form.Item;

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
  size,
  rows,
  className
}) => {
  return (
    <FormItem
      validateStatus={error && "error"}
      help={error ? error : info ? info : ""}
    >
      <TextArea
        rows={rows}
        className={className}
        size={size}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </FormItem>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number.isRequired
};

TextAreaFieldGroup.defaultProps = {
  size: "large",
  rows: 4
};

export default TextAreaFieldGroup;
