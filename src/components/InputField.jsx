import React from "react";
import PropTypes from "prop-types";

const InputField = ({ label, name, type, value, onChange, placeholder, required }) => {
  return (
    <div style={styles.inputContainer}>
      <label style={styles.label}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={styles.input}
        required={required}
      />
    </div>
  );
};

const styles = {
  inputContainer: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    width: "70%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    backgroundColor:"black",
    color:"white",
  },
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
