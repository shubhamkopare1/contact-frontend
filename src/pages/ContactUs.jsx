import React from "react";
import ContactForm from "../components/ContactForm";
import "../styles/infoSection.css"
import call from "../assets/call.jpg" 
import message from "../assets/message.jpg"
const ContactUs = () => {
  return (
    <div style={styles.container} className="infoContainer">
      <div style={styles.infoSection} className="infoSection">
        <h1>Contact Us, We're Ready to Help!</h1>
        <p className="colorRequired">
          We strive to provide you with the best experience and the best platform to find your choice. Post us any queries and we'll get back to you.
        </p>
        <div className="chatWithUsLinks">
          <div className="icons">
            <img src={call}/>
            <img src={message} style={{marginTop:"0px"}}/>
          </div>
          <div>
            <p style={{marginTop:"0px"}}>
              <strong>Chat with us !!</strong> <br />
              <a href="mailto:hello@toletglobe.in" style={{marginTop:"0px",textDecoration:"none",color:"#6bc1b6"}}>to_let@gmail.com</a>
            </p>
            <p style={{marginTop:"50px"}}>
              <strong >Call us ...</strong> <br />
              <a href="mailto:hello@toletglobe.in" style={{marginTop:"0px",textDecoration:"none",color:"#6bc1b6"}}>+91 8707727347</a>
            </p>
          </div>
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
    marginTop:"150px",
    marginLeft:"200px"
  },
  

  formSection: {
    flex: "1",
  },
};

export default ContactUs;
