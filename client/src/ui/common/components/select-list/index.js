import React from "react";
import PropTypes from "prop-types";
import { Select } from "antd";

const Option = Select.Option;

const SelectList = ({ className, options, defaultValue }) => {
  const optionsDisplay = options.map((option, index) => {
    return (
      <Option key={index} value={option.value}>
        {option.text}
      </Option>
    );
  });

  return (
    <Select
      defaultValue={defaultValue}
      className={`${className} select-wrapper`}
    >
      {optionsDisplay}
    </Select>
  );
};

SelectList.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string.isRequired
};

SelectList.defaultProps = {};

export default SelectList;
