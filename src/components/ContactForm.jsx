import React, { useState } from "react";
import PropTypes from "prop-types";
import { sendContactForm } from "../services/api";
import { validateEmail, validatePhone } from "../utils/validation";
import InputField from "./InputField";
import "../styles/infoSection.css"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate form
    if (!validateEmail(formData.email)) {
      return setError("Invalid email address");
    }
    if (formData.phone && !validatePhone(formData.phone)) {
      return setError("Invalid phone number");
    }

    try {
      await sendContactForm(formData);
      setSuccess("Your query has been submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form} className="formSection">
      {error && <p style={styles.error}>{error}</p>}
      {success && <p style={styles.success}>{success}</p>}
      <InputField
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="name@provider.com"
        required
      />
      <InputField
        label="Phone"
        name="phone"
        type="text"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Your Phone Number"
      />
      <div style={styles.inputContainer}>
        <label style={styles.label}>Topic</label>
        <select
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          style={styles.input}
          required
        >
          <option value="">Select a topic</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Support">Support</option>
          <option value="Feedback">Feedback</option>
        </select>
      </div>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          placeholder="Type your message..."
          required
        />
      </div>
      <button type="submit" style={styles.button}>
        Submit Query
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    padding: "20px",
    borderRadius: "10px",
    color: "#fff",
  },
  inputContainer: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    
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
  textarea: {
    width: "70%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    minHeight: "100px",
    backgroundColor:"black",
    color:"white",
  },
  button: {
    backgroundColor: "#5acba1",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
    width:"70%"
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
  success: {
    color: "green",
    marginBottom: "10px",
  },
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
