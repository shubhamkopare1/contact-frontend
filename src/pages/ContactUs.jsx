import React from "react";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <div style={styles.infoSection}>
        <h1>Contact Us, We're Ready to Help!</h1>
        <p>
          We strive to provide you with the best experience and the best platform to find your choice. Post us any queries and we'll get back to you.
        </p>
        <div>
          <p>
            <strong>Chat with us !!</strong> <br />
            to_let@gmail.com
          </p>
          <p>
            <strong>Call us ...</strong> <br />
            +91 9876543210
          </p>
        </div>
      </div>
      <div style={styles.formSection}>
        <ContactForm />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "20px",
    color:"white",
  },
  infoSection: {
    flex: "1",
    marginRight: "20px",
    // color:"white",
  },
  formSection: {
    flex: "1",
  },
};

export default ContactUs;
