import React from "react";
import PropTypes from "prop-types";
import { DatePicker, Form } from "antd";
import moment from "moment";

const FormItem = Form.Item;

const DateFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
  disabled,
  format,
  size,
  className,
  wrapperClass
}) => {
  return (
    <FormItem
      className={wrapperClass}
      validateStatus={error && "error"}
      help={error ? error : info ? info : ""}
    >
      <DatePicker
        className={className}
        size={size}
        onChange={(date, dateString) => {
          const e = {
            target: {
              name: name,
              value: dateString
            }
          };
          onChange(e);
        }}
        format={format}
        placeholder={placeholder}
        name={name}
        value={value ? moment(value) : undefined}
        disabled={disabled}
      />
    </FormItem>
  );
};

DateFieldGroup.propTypes = {
  wrapperClass: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

DateFieldGroup.defaultProps = {
  size: "large",
  format: "YYYY/MM/DD",
  className: "width100"
};

export default DateFieldGroup;
