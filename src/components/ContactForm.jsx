import React, { useState } from "react";
import PropTypes from "prop-types";
import { sendContactForm } from "../services/api";
import { validateEmail, validatePhone } from "../utils/validation";
import InputField from "./InputField";
import "../styles/infoSection.css";

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
    <form onSubmit={handleSubmit} className="formSections" >
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
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
      <div className="inputContainer">
        <label>Topic</label>
        <select
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          required
        >
          <option value="">Select a topic</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Support">Support</option>
          <option value="Feedback">Feedback</option>
        </select>
      </div>
      <div className="inputContainer">
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message..."
          required
        />
      </div>
      <button type="submit">Submit Query</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
