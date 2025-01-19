import React from "react";
import ContactForm from "../components/ContactForm";
// import "../styles/ContactUs.css";  // Import the new CSS file
import call from "../assets/call.jpg";
import message from "../assets/message.jpg";
import "../styles/infoSection.css";

const ContactUs = () => {
  return (
    <div className="infoContainer">
      <div className="infoSection">
        <h1>Contact Us, We're Ready to Help!</h1>
        <p className="colorRequired">
          We strive to provide you with the best experience and the best platform to find your choice.
        </p>
        <p className="text">
        Post us any queries and we'll get back to you.
        </p>
        <div className="chatWithUsLinks">
          <div className="icons">
          <img src={message} alt="Message" />
            <img src={call} alt="Call" />
           
          </div>
          <div>
            <p>
              <strong>Chat with us !!</strong> <br />
              <p className="text">Our friendly team is here to help</p>
              <a href="mailto:hello@toletglobe.in">to_let@gmail.com</a>
            </p>
            <p>
              <strong>Call us ...</strong> <br />
              <p className="text">Mon - Sat, 8 AM to 10 PM</p>
              <a href="mailto:hello@toletglobe.in">+91 8707727347</a>
            </p>
          </div>
        </div>
      </div>
      <div className="formSection">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;

