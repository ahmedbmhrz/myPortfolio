import React, { PureComponent } from "react";
import "./Contact.css";
import fireAbout from "../../assets/fire-About.png";
import mail_icon from "../../assets/mail_icon.png";
import location_icon from "../../assets/location_icon.png";
import call_icon from "../../assets/call_icon.png";

const Conect = () => {
  return (
    <div className="conect">
      <div className="conect-title">
        <h1>Get in touh</h1>
        <img src={fireAbout} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>let's talk</h1>
          <p>
            Feel free to reach out for collaborations, inquiries, or just to say
            hello! I'm always excited to connect and discuss new ideas.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>ahmed.bamuhriz@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+111 421 431</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>istanbol,15</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Conect;
