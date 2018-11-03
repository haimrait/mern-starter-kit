import React from "react";
import PropTypes from "prop-types";
import { Select, Form } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

const SelectListGroup = ({
  name,
  value,
  error,
  info,
  onChange,
  options,
  placeholder,
  size
}) => {
  const selectOptions = options.map(option => (
    <Option key={option.label} value={option.value}>
      {option.label}
    </Option>
  ));
  return (
    <FormItem
      validateStatus={error && "error"}
      help={error ? error : info ? info : ""}
    >
      <Select
        size={size}
        name={name}
        value={value}
        onChange={value => {
          const e = {
            target: {
              name: name,
              value: value
            }
          };
          onChange(e);
        }}
        placeholder={placeholder}
      >
        {selectOptions}
      </Select>
    </FormItem>
  );
};

SelectListGroup.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

SelectListGroup.defaultProps = {
  size: "large"
};

export default SelectListGroup;
