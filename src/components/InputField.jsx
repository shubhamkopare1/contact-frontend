// InputField.js
import React from "react";
import PropTypes from "prop-types";
import "../styles/infoSection.css";

const InputField = ({ label, name, type, value, onChange, placeholder, required }) => {
  return (
    <div className="input-container">
      <label className="label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input"
        required={required}
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default InputField;
