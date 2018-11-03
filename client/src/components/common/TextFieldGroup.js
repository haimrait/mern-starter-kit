import React from "react";
import PropTypes from "prop-types";
import { Input, Form } from "antd";

const FormItem = Form.Item;

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
  size
}) => {
  return (
    <FormItem
      validateStatus={error && "error"}
      help={error ? error : info ? info : ""}
    >
      <Input
        size={size}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </FormItem>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text",
  size: "large"
};

export default TextFieldGroup;
